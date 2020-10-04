var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true
  },
  categories: {
    type: String,
    required: true
  },
  isActive: {
    type: Number
  },
  code: {
    type: Number
  },
  createdUser: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  updatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  updated: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  personInfo: {
    name: {
      mm: {
        type: String,
        required: true
      },
      jp: String
    },
    nrc: {
      type: String,
      unique: true
    },
    nrcSelect: String,
    nrcNo: Number,
    dob: {
      type: Date,
      default: Date.now
    },
    gender: Boolean,
    religion: {
      mm: String,
      jp: String
    },
    nation: {
      mm: String,
      jp: String
    },
    email: String,
    phoneNo: String,
    homeAddress: {
      mm: String,
      jp: String
    },
    currentAddress: {
      mm: String,
      jp: String
    },
    blood: String,
    profileImage: String
  },
  // interviews: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Interview"
  // }],

  personDetail: {
    dateOfDecision: Date,
    noOfInterview: Number,
    priorities: [
      {
        mm: String,
        jp: String
      }
    ],
    leftOrRight: {
      name: String,
      mm: String,
      jp: String
    },
    height: Number,
    weight: Number,
    tattoo: {
      type: Boolean,
      default: false
    },
    alcohol: {
      type: Boolean,
      default: false
    },
    smoke: {
      type: Boolean,
      default: false
    },
    livingWithPeople: {
      type: Boolean,
      default: true
    },
    married: {
      type: Boolean,
      default: false
    },
    lover: {
      type: Boolean,
      default: false
    },
    wedding: {
      type: Boolean,
      default: false
    },
    self: {
      type: Number,
      default: 0
    },
    parents: {
      type: Number,
      default: 0
    },
    relative: {
      type: Number,
      default: 0
    },
    bank: {
      type: Number,
      default: 0
    },
    other: {
      type: Number,
      default: 0
    },
    threeYearIncome: Number,
    howToUse: {
      mm: String,
      jp: String
    },
    remarks: {
      mm: String,
      jp: String
    },
    nanGlasses: {
      right: Number,
      left: Number
    },
    glasses: {
      right: Number,
      left: Number
    },
    colorView: Number,
    handPower: {
      left: Number,
      right: Number
    }
  },

  jpInfo: {
    jpLevels: [
      {
        jpLanguageLevel: String,
        teachingPeriod: Date,
        certificate: {
          mm: String,
          jp: String
        },
        training: {
          mm: String,
          jp: String
        }
      }
    ],
    familyInJapan: {
      yesno: {
        name: String,
        mm: String,
        jp: String
      },
      number: {
        type: Number,
        default: 0
      },
      address: {
        mm: String,
        jp: String
      },
      visaType: String
    },
    overseas: {
      yesno: {
        name: String,
        mm: String,
        jp: String
      },
      countries: {
        mm: String,
        jp: String
      }
    },
    passport: {
      yesno: {
        name: String,
        mm: String,
        jp: String
      },
      passportNo: String,
      expirationDate: Date
    },
    otherLanguages: {
      yesno: {
        name: String,
        mm: String,
        jp: String
      },
      languages: {
        mm: String,
        jp: String
      }
    }
  },

  edus: [
    {
      attendanceSchool: {
        mm: String,
        jp: String
      },
      education: {
        mm: String,
        jp: String
      },
      degree: {
        mm: String,
        jp: String
      },
      major: {
        mm: String,
        jp: String
      },
      eduStatus: {
        mm: String,
        jp: String
      },
      eduToDate: Date,
      eduFromDate: Date,
      achievementLevel: {
        mm: String,
        jp: String
      }
    }
  ],

  trainings: [
    {
      trainingSchool: {
        mm: String,
        jp: String
      },
      certificate: {
        mm: String,
        jp: String
      },
      trainingToDate: Date,
      trainingFromDate: Date
    }
  ],

  jobs: [
    {
      name: {
        mm: String,
        jp: String
      },
      businessType: {
        mm: String,
        jp: String
      },
      businessDetail: {
        mm: String,
        jp: String
      },
      jobPosition: {
        mm: String,
        jp: String
      },
      avgSalary: Number,
      description: {
        mm: String,
        jp: String
      },
      toDate: Date,
      fromDate: Date,
      period: {
        mm: String,
        jp: String
      }
    }
  ],

  families: [
    {
      name: {
        mm: String,
        jp: String
      },
      relation: {
        mm: String,
        jp: String
      },
      age: Number,
      job: {
        mm: String,
        jp: String
      },
      monthlyIncome: Number,
      monthlyExpense: Number
    }
  ],

  questions: {
    n4CanYouWin: Boolean,
    tiredness: Boolean,
    weakness: Boolean,
    surgeries: Boolean,
    noOvertime: Boolean,
    familySurgeries: Boolean,
    workIsFast: Boolean,
    bodybuilding: Boolean
  },

  other: {
    advantages: {
      mm: String,
      jp: String
    },
    disadvantage: {
      mm: String,
      jp: String
    },
    hobby: {
      mm: String,
      jp: String
    },
    personality: {
      mm: String,
      jp: String
    },
    happyTime: {
      mm: String,
      jp: String
    },
    difficultTime: {
      mm: String,
      jp: String
    }
  },
  gallery: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gallery"
    }
  ]
});

module.exports = mongoose.model("Person", personSchema, "persons");
