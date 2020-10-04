const { Upload, Person } = require("../models");
const AWS = require('aws-sdk')

module.exports = {
    async index(req, res) {
        try {
            const files = await Upload.find({ person: req.params.personId, isActive: true });

            let images = [];
            let pdfs = [];
            let mswords = [];
            let msexcels = [];

            files.map((item) => {
                let myFile = item.url.split(".")
                const fileType = myFile[myFile.length - 1]

                if (fileType == 'jpg' || fileType == 'png' || fileType == 'jpeg' || fileType == 'gif') {
                    images.push(item);
                }
                if (fileType == 'pdf') {
                    pdfs.push(item);
                }
                if (fileType == 'doc' || fileType == 'docx') {
                    mswords.push(item);
                }
                if (fileType == 'xls' || fileType == 'xlsx') {
                    msexcels.push(item);
                }
            })

            res.send({
                files: {
                    images: images,
                    pdfs: pdfs,
                    mswords: mswords,
                    msexcels: msexcels
                }
            });
        } catch (err) {
            res.status(500).send({
                error: "an error has occured trying to show the File Upload"
            });
        }
    },

    async post(req, res) {
        const file = req.files;
        const person = req.params.personId;
        let now = Date.now();
        let s3bucket = new AWS.S3({
            accessKeyId: "AKIAIAVAIIOIZDDJGVGQ",
            secretAccessKey: "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"
        })
        s3bucket.createBucket(function () {
            // let Bucket_Path = 's3://vista-test/uploads';
            //Where you want to store your file
            var ResponseData = [];

            file.map((item) => {
                var params = {
                    Bucket: 'vista-test/uploads',
                    Key: `${now}-${item.originalname}`,
                    Body: item.buffer
                };
                s3bucket.upload(params, function (err, data) {
                    if (err) {
                        res.json({ "error": true, "Message": err });
                    } else {
                        let fileUpload = {
                            etag: data.ETag,
                            url: data.Location,
                            key: data.Key,
                            bucket: data.Bucket,
                            person: person,
                            user: req.user._id
                        }
                        ResponseData.push(fileUpload);
                        if (ResponseData.length == file.length) {
                            Upload.insertMany(ResponseData)
                                .then(function (docs) {
                                    res.json(docs);
                                })
                                .catch(function (err) {
                                    res.status(500).send(err);
                                });

                            // await Upload.create(uploads);

                            // res.json({ "error": false, "Message": "File Uploaded    SuceesFully", Data: ResponseData });
                        }
                    }
                });
            });
        });
    },
    async put(req, res) {
        try {
            await Upload.updateOne({ _id: req.body.id }, { name: req.body.name }).exec()

            res.send({
                saved: true,
                message: "Successiful updated !"
            });
        } catch (err) {
            res.status(500).send({
                saved: false,
                error: "Your file update failed !"
            });
        }
    },
    async deleted(req, res) {
        try {
            await Upload.updateOne({ _id: req.body.id }, { isActive: false }).exec()

            res.send({
                saved: true,
                message: "Successiful deleted !"
            });
        } catch (err) {
            res.status(500).send({
                saved: false,
                error: "Your file delete failed !"
            });
        }
    }
};
