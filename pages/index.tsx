import Head from "next/head"
import Link from "next/link"
import BuddyOfferElement from '@buddy-technology/offer-component';
import { themeBase, themeAlt } from '../styles/as-auto-css'

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const options = {
  partnerID: 'p-buddytest',
  ion: 'ALLSTATE_AUTO',
  stage: 'TESTING',
  // Here you can see we are applying the Allstate logo and changing the link to reference allstate.com
  logoOverride: {
    url: 'https://allstate.com',
    alt: 'Powered by: Allstate',
    src: 'https://s3.amazonaws.com/embed.buddy.insure/allstate/auto/allstate-seeklogo.com.svg',
  },
  // data passed in here helps to pre-populate the data fields so you don't have to type all of the information in. These values can be changed either in the script here or by the user in the browser itself. 
  theme: themeBase,
  data: {
    "policy": {
      "state": "VA",
      "addressAutocompleteInput": "1717 E Cary St, Richmond, VA 23223, USA",
      "spouseInfo": {
        "firstName": "",
        "lastName": "",
        "dateOfBirth": "",
        "ageFirstAutoDrivingLicenseIssued": 16,
        "spouseDriverLicenseNumber": "",
        "shouldRequireSpouseLicenseDetails": "NONE"
      },
      "priorPolicies": {
        "yearsOfContinuousCoverage": "4",
        "provider": "StateFarm",
        "expirationDate": "06/27/2023",
        "coverageLevels": {
          "bodilyInjuryLiability": "IDoNotKnow"
        }
      },
      "violationsInFiveYears": 'true',
      "violations": [{
        "month": '02',
        "year": '2022',
        "descriptionCode": 'Committing A Felony With An Auto'
      }],
      "genderCode": "Female",
      "maritalStatusCode": "Single",
      "odometerReading": "65000",
      "vehicleYear": "2008",
      "vin": "WVGBE77L38D079327",
      "residenceTypeCode": "Own",
      "timeLivedAtCurrentAddressCode": "MoreThan6Months",
      "highestLevelOfEducation": "Bachelors",
      "employmentStatusCode": "Employed",
      "ageFirstAutoDrivingLicenseIssued": 16,
      "initialCurrentlyCovered": "true",
      "currentlyInsured": "true",
      "annualMileage": "9000",
      "primaryUseCode": "Pleasure",
      "rideShareUsage": "false",
      "originalOwned": "false",
      "ownershipStatus": "Own",
      "driverLicenseNumber": "412356789",
      "driverLicenseState": "HI",
      "primarilyParkedAtCurrentAddress": "true",
      "purchaseDate": "12/12/2020",
      "primaryDriverDynamicSelect": "PRIMARY",
      "startDate": "06/27/2023"
    },
    "customer": {
      "firstName": "Sandra",
      "lastName": "Sheppard",
      "email": "demo9821457@iambuddy.com",
      "phone": "+18048675309",
      "address": {
        "line1": "1717 E Cary St",
        "postalCode": "23223",
        "city": "Richmond",
        "state": "VA"
      },
      "dob": "12/12/2000"
    }
  }
}

const themePCU = {
  "baseTheme": "base",
  "palette": "base",
  "overrides": {
    "styles": {
      "#pcu-worldexplorer-in": {
        "label[for=policy-hasPromoCode]": {
          "display": "none"
        },
        "#policy-hasPromoCode-field-container": {
          "marginTop": "5rem"
        },
        "#policy-hasPromoCode-checkbox-wrapper": {
          "justifyContent": "center"
        },
        "#destination-content-container-AFTER-0": {
          "marginTop": "auto",
          "backgroundColor": "rgb(0,0,0,.5)",
          "borderRadius": ".75rem",
          "padding": "1rem",
          "color": "#fff",
          "marginLeft": "auto",
          "marginRight": "auto",
          "p": {
            "color": "#FFF!important",
            "marginTop": "0!important",
            "marginBottom": "0!important"
          }
        },
        "#quote-content-container-AFTER-1, #quote-content-container-AFTER-2": {
          "p": {
            "fontSize": ".75rem!important",
            "marginTop": "0px!important",
            "marginBottom": "0px!important"
          }
        },
        "#quote-content-container-BEFORE-2, #quoteUpdate-content-container-BEFORE-9": {
          "margin": "1.25rem",
          "backgroundColor": "rgb(0,0,0,.5)",
          "borderRadius": ".75rem",
          "padding": "1rem",
          "color": "#fff",
          "marginLeft": "auto",
          "marginRight": "auto",
          "width": "fit-content",
          "p, p > strong": {
            "color": "#FFF!important",
            "marginTop": "0!important",
            "marginBottom": "0!important"
          }
        },
        "#checkout-view-container": {
          "minHeight": "200px !important",
          "h2": {
            "fontFamily": "Roboto, sans-serif!important",
            "fontWeight": "400!important"
          }
        },
        "#checkout-view-container, .mt-4": {
          "paddingBottom": "5rem"
        },
        "#quoteUpdate-view-container": {
          "minHeight": "680px",
          "@media (min-width: 992px)": {
            "minHeight": "550px"
          }
        },
        "#quote-content-container-AFTER-2, #policy-passportCountry-field-container, #policy-passengerOne-passportCountry-field-container, #policy-passengerTwo-passportCountry-field-container, #policy-passengerThree-passportCountry-field-container, #policy-passengerFour-passportCountry-field-container": {
          "paddingBottom": "5rem !important"
        },
        "#checkout-view-container hr, #quote-view-container hr": {
          "margin": "1rem",
          "marginLeft": "0"
        },
        "#checkout-view-container li,#quote-view-container li": {
          "margin-left": "1rem"
        },
        "#checkout-view-container h3, #quote-view-container h3": {
          "margin-bottom": "1rem"
        },
        "#quote-price-label-container": {
          "display": "none"
        },
        "#offer-view-container h3": {
          "color": "#fff !important"
        },
        "#offer-content-container-BEFORE-0 h2": {
          "color": "#fff!important",
          "font-weight": "700!important",
          "marginBottom": "1rem",
          "fontFamily": "Roboto, sans-serif",
          "width": "90%",
          "@media (min-width: 992px)": {
            "width": "70%"
          }
        },
        "#offer-content-container-BEFORE-1 h3": {
          "color": "#fff",
          "marginTop": "1.5rem",
          "font-weight": "700",
          "width": "90%",
          "@media (min-width: 992px)": {
            "color": "var(--color-primary)",
            "width": "50%"
          }
        },
        "#offer-view-container": {
          "minHeight": "620px",
          "background": "url('https://s3.amazonaws.com/staging.embed.buddy.insure/insured_nomads/offer-bg.png')",
          "backgroundRepeat": "no-repeat",
          "backgroundSize": "cover",
          "backgroundPosition": "center top",
          "padding": "2.5rem"
        },
        "#quoteUpdate-content-container-BEFORE-0, #quoteUpdate-content-container-BEFORE-1, #quoteUpdate-content-container-BEFORE-2, #quoteUpdate-content-container-BEFORE-3, #quoteUpdate-content-container-BEFORE-4": {
          "marginTop": "1.65rem"
        },
        "#quoteUpdate-content-container-BEFORE-2 table, #quoteUpdate-content-container-BEFORE-3 table": {
          "margin": "0"
        },
        "#quoteUpdate-view-title": {
          "display": "none"
        },
        "#policy-passengerOne-phone-field-container .text-negative, #policy-passengerTwo-phone-field-container .text-negative, #policy-passengerThree-phone-field-container .text-negative, #policy-passengerFour-phone-field-container .text-negative, #policy-passengerOne-email-field-container .text-negative, #policy-passengerTwo-email-field-container .text-negative, #policy-passengerThree-email-field-container .text-negative, #policy-passengerFour-email-field-container .text-negative": {
          "display": "none"
        },
        ".view-container": {
          "display": "block",
          "position": "relative",
          "minHeight": "460px"
        },
        "#policy-travelDuration-field-container .input-error": {
          "display": "none"
        },
        "#when-content-container-AFTER-0, #when-content-container-AFTER-1": {
          "color": "#D62719"
        },
        "#policy-additonalBenefits-field-container": {
          "padding": "1rem",
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center"
        },
        "label[for=policy-additonalBenefits]": {
          "width": "fit-content"
        },
        "select#policy-additonalBenefits": {
          "width": "fit-content"
        },
        ".DayPicker-Month": {
          "margin": "unset",
          "marginTop": "1rem"
        },
        "#quote-view-wrapper > p": {
          "display": "none"
        },
        "#policy-promoCode-field-container": {
          "maxWidth": "400px",
          "margin": "auto",
          "marginTop": ".5rem"
        },
        "#customer-lastName-field-container, #customer-firstName-field-container, #policy-passengerOne-firstName-field-container, #policy-passengerTwo-firstName-field-container, #policy-passengerThree-firstName-field-container, #policy-passengerFour-firstName-field-container, #policy-passengerOne-lastName-field-container, #policy-passengerTwo-lastName-field-container, #policy-passengerThree-lastName-field-container, #policy-passengerFour-lastName-field-container": {
          "@media (min-width: 992px)": {
            "width": "39%",
            "display": "inline-grid",
            "marginRight": "1%"
          }
        },
        "#policy-primaryTravelerGender-field-container, #policy-passengerOne-gender-field-container, #policy-passengerTwo-gender-field-container, #policy-passengerThree-gender-field-container, #policy-passengerFour-gender-field-container": {
          "@media (min-width: 992px)": {
            "width": "19%",
            "display": "inline-grid",
            "marginRight": "1%"
          }
        },
        "#policy-primaryTravelerPhoneNumber-field-container, #policy-passengerOne-phoneNumber-field-container, #policy-passengerTwo-phoneNumber-field-container, #policy-passengerThree-phoneNumber-field-container, #policy-passengerFour-phoneNumber-field-container": {
          "width": "61%",
          "display": "inline-grid",
          "marginRight": "1%",
          "@media (min-width: 992px)": {
            "width": "30%",
            "display": "inline-grid",
            "marginRight": "1%"
          }
        },
        "#policy-primaryTravelerPhoneCountryCode-field-container, #policy-passengerOne-phoneCountryCode-field-container, #policy-passengerTwo-phoneCountryCode-field-container, #policy-passengerThree-phoneCountryCode-field-container, #policy-passengerFour-phoneCountryCode-field-container": {
          "width": "37%",
          "display": "inline-grid",
          "marginRight": "1%",
          "@media (min-width: 992px)": {
            "width": "18%",
            "display": "inline-grid",
            "marginRight": "1%"
          }
        },
        "#customer-address-state-field-container, #customer-address-country-field-container, #customer-email-field-container, #policy-passportCountry-field-container, #policy-passengerOne-address-state-field-container, #policy-passengerOne-address-country-field-container, #policy-passengerOne-email-field-container, #policy-passengerOne-passportCountry-field-container, #policy-passengerTwo-address-state-field-container, #policy-passengerTwo-address-country-field-container, #policy-passengerTwo-email-field-container, #policy-passengerTwo-passportCountry-field-container, #policy-passengerThree-address-state-field-container, #policy-passengerThree-address-country-field-container, #policy-passengerThree-email-field-container,  #policy-passengerThree-passportCountry-field-container, #policy-passengerFour-address-state-field-container, #policy-passengerFour-address-country-field-container, #policy-passengerFour-email-field-container, #policy-passengerFour-passportCountry-field-container": {
          "@media (min-width: 992px)": {
            "width": "49%",
            "display": "inline-grid",
            "marginLeft": "1%"
          }
        },
        "#policy-primaryTravelerAgeRange-field-container, #policy-passengerFour-firstNameOne-field-container, #policy-passengerFour-address-city-field-container, #policy-passengerFour-address-postalCode-field-container, #policy-passengerFour-phone-field-container, #policy-passengerFour-dob-field-container, #policy-passengerFour-dobOne-field-container, #policy-passengerThree-firstNameOne-field-container, #policy-passengerThree-address-city-field-container, #policy-passengerThree-address-postalCode-field-container, #policy-passengerThree-phone-field-container, #policy-passengerThree-dob-field-container, #policy-passengerThree-dobOne-field-container, #policy-passengerTwo-firstNameOne-field-container, #policy-passengerTwo-address-city-field-container, #policy-passengerTwo-address-postalCode-field-container, #policy-passengerTwo-phone-field-container, #policy-passengerTwo-dob-field-container, #policy-passengerTwo-dobOne-field-container, #policy-passengerOne-firstNameOne-field-container, #policy-passengerOne-address-city-field-container, #policy-passengerOne-address-postalCode-field-container, #policy-passengerOne-phone-field-container, #policy-passengerOne-dob-field-container, #policy-passengerOne-dobOne-field-container, #policy-firstNameOne-field-container, #customer-address-city-field-container, #customer-address-postalCode-field-container, #customer-dob-field-container, #customer-dob-field-container, #customer-passportCountry-field-container, #policy-primaryTravelerName-field-container, #policy-primaryTravelerAge-field-container, #policy-endDate-field-container, #policy-startDate-field-container": {
          "@media (min-width: 992px)": {
            "width": "49%",
            "display": "inline-grid",
            "marginRight": "1%"
          }
        },
        "label[for=customer-firstName], label[for=customer-dob], label[for=travelerName], label[for=travelerAge]": {
          "textAlign": "left"
        },
        "#policy-notInNyOrAr-field-container, #policy-passengerOne-notInNyOrAr-field-container,  #policy-passengerTwo-notInNyOrAr-field-container,  #policy-passengerThree-notInNyOrAr-field-container,  #policy-passengerFour-notInNyOrAr-field-container": {
          ".input-error": {
            "display": "none"
          }
        }
      },
      "#pcu-worldexplorer-in #policy-additionalActivitiesAll-field-container, #pcu-worldexplorer-in #policy-additionalActivitiesSome-field-container": {
        "margin": "2rem auto",
        "@media (min-width: 992px)": {
          "width": "49%"
        }
      },
      "#pcu-worldexplorer-in #policy-additionalActivitiesNone-field-container": {
        "margin": "2rem auto",
        "@media (min-width: 992px)": {
          "width": "90%"
        }
      },
      "#pcu-worldexplorer-in #policy-travelers-array-container .array-item-pill": {
        "width": "100%"
      },
      "#pcu-worldexplorer-in #offer-container": {
        "maxWidth": "1200px",
        "margin": "0 auto"
      },
      "#pcu-worldexplorer-in #policy-travelDuration, #pcu-worldexplorer-in label[for=policy-travelDuration], #pcu-worldexplorer-in label[for=policy-mainDestination], #pcu-worldexplorer-in label[for=policy-includesUsVisible]": {
        "display": "none"
      },
      "#pcu-worldexplorer-in #policy-endDate-field-container, #pcu-worldexplorer-in #policy-startDate-field-container, #pcu-worldexplorer-in #policy-firstNameOne-field-container, #pcu-worldexplorer-in #travelerName-field-container, #pcu-worldexplorer-in #policy-primaryTravelerAgeRange-field-container, #pcu-worldexplorer-in #travelerAge-field-container": {
        "width": "100%",
        "@media (min-width: 992px)": {
          "maxWidth": "30%",
          "minWidth": "30%"
        }
      },
      "#pcu-worldexplorer-in #travelerName-field-container, #pcu-worldexplorer-in #travelerAge-field-container": {
        "display": "inline-block",
        "verticalAlign": "top"
      },
      "#pcu-worldexplorer-in #destination-view-container, #pcu-worldexplorer-in #when-view-container, #pcu-worldexplorer-in #who-view-container, #pcu-worldexplorer-in #promoCheck-view-container": {
        "textAlign": "center"
      },
      "#pcu-worldexplorer-in #when-view-container .input-error": {
        "textAlign": "center"
      },
      "#pcu-worldexplorer-in #quote-view-container": {
        "width": "100%",
        "flexDirection": "column",
        "display": "flex",
        "textAlign": "center"
      },
      "#pcu-worldexplorer-in #who-view-container #travelerAge-field-container": {
        "marginLeft": "0rem",
        "@media (min-width: 992px)": {
          "marginLeft": "1rem"
        }
      },
      "#pcu-worldexplorer-in #who-view-container": {
        "marginRight": "0rem",
        "textAlign": "center"
      },
      "#pcu-worldexplorer-in #policy-travelers-array-container": {
        "@media (min-width: 992px)": {
          "margin": "auto"
        }
      },
      "#pcu-worldexplorer-in #policy-travelers-array-container > *": {
        "justifyContent": "space-between",
        "margin": ".75rem auto",
        "@media (min-width: 992px)": {
          "maxWidth": "60%"
        }
      },
      ".array-item-remove-button": {
        "minWidth": "20px!important"
      },
      "#pcu-worldexplorer-in .array-item-pill": {
        "backgroundColor": "white",
        "color": "#666"
      },
      "#quote-content-container-BEFORE-1": {
        "marginTop": "2rem"
      },
      "#pcu-worldexplorer-in #quote-view-container #quote-view-title": {
        "display": "none"
      },
      "#pcu-worldexplorer-in #quote-view-container ": {
        "margin": "1rem",
        "marginLeft": "0"
      },
      "#pcu-worldexplorer-in #quote-view-container #quote-content-container-AFTER-1, #pcu-worldexplorer-in #quote-view-container #quote-content-container-AFTER-2": {
        "textAlign": "left",
        "padding": "4rem",
        "paddingTop": "1rem",
        "paddingBottom": "0",
        "@media (max-width: 600px)": {
          "padding": "1rem 0rem"
        }
      },
      "#pcu-worldexplorer-in #quote-view-container #quote-content-container-AFTER-1 p, #pcu-worldexplorer-in #quote-view-container #quote-content-container-AFTER-2 p": {
        "fontSize": ".75rem"
      },
      "#pcu-worldexplorer-in #quote-view-container #quote-content-container-AFTER-1 h3, #pcu-worldexplorer-in #quote-view-container #quote-content-container-AFTER-2 h3": {
        "marginBottom": ".25rem"
      },
      "#pcu-worldexplorer-in #quote-view-container li": {
        "marginLeft": "1rem"
      },
      "#pcu-worldexplorer-in #quote-view-container h3": {
        "marginBottom": "1rem"
      },
      "#pcu-worldexplorer-in #quote-view-container label": {
        "fontWeight": "700",
        "@media (max-width: 600px)": {
          "margin": "4px"
        }
      },
      "table": {
        "borderCollapse": "collapse",
        "margin": "0 auto",
        "marginBottom": ".5rem",
        "padding": ".25rem",
        "minWidth": "90%",
        "width": "90%",
        "tableLayout": "inherit",
        "fontColor": "black",
        "@media (max-width: 600px)": {
          "border": 0
        }
      },
      "thead": {
        "@media (max-width: 600px)": {
          "border": "none",
          "clip": "rect(0 0 0 0)",
          "height": "1px",
          "margin": "-1px",
          "overflow": "hidden",
          "padding": 0,
          "position": "absolute",
          "width": "1px"
        }
      },
      "caption": {
        "fontSize": "1.5em",
        "margin": ".5em 0 .75em",
        "@media (max-width: 600px)": {
          "border": 0
        }
      },
      "table tr": {
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "@media (max-width: 600px)": {
          "display": "block"
        }
      },
      "table th": {
        "fontSize": ".95em"
      },
      "table th, table td": {
        "padding": ".625em",
        "textAlign": "center",
        "@media (max-width: 600px)": {}
      },
      "table td": {
        "@media (max-width: 600px)": {
          "borderBottom": "1px solid #ddd",
          "display": "block",
          "fontSize": ".8em",
          "textAlign": "right",
          "minHeight": "35px"
        }
      },
      "tbody > tr > td:first-child": {
        "@media (max-width: 600px)": {
          "paddingLeft": ".5rem"
        }
      },
      "tbody > tr > td:last-child": {
        "@media (max-width: 600px)": {
          "paddingRight": ".5rem"
        }
      },
      "td:before": {
        "@media (max-width: 600px)": {
          "float": "left",
          "fontWeight": "bold",
          "textTransform": "uppercase"
        }
      },
      "#pcu-worldexplorer-in table": {
        "border": "2px solid var(--color-primary)",
        "@media (max-width: 600px)": {
          "border": "none"
        }
      },
      "#pcu-worldexplorer-in #quote-content-container-BEFORE-0 > table > tbody > tr > td:nth-child(1):before, #pcu-worldexplorer-in #quoteUpdate-content-container-BEFORE-2 > table > tbody > tr > td:nth-child(1):before": {
        "@media (max-width: 600px)": {
          "content": "'Destination'"
        }
      },
      "#pcu-worldexplorer-in #quote-content-container-BEFORE-0 > table > tbody > tr > td:nth-child(2):before, #pcu-worldexplorer-in #quoteUpdate-content-container-BEFORE-2 > table > tbody > tr > td:nth-child(2):before": {
        "@media (max-width: 600px)": {
          "content": "'Trip Start'"
        }
      },
      "#pcu-worldexplorer-in #quote-content-container-BEFORE-0 > table > tbody > tr > td:nth-child(3):before, #pcu-worldexplorer-in #quoteUpdate-content-container-BEFORE-2 > table > tbody > tr > td:nth-child(3):before": {
        "@media (max-width: 600px)": {
          "content": "'Trip End'"
        }
      },
      "#pcu-worldexplorer-in #quote-content-container-BEFORE-0 > table > tbody > tr > td:nth-child(4):before, #pcu-worldexplorer-in #quoteUpdate-content-container-BEFORE-2 > table > tbody > tr > td:nth-child(4):before": {
        "@media (max-width: 600px)": {
          "content": "'Total Days/Travelers'"
        }
      },
      "#pcu-worldexplorer-in #quote-content-container-AFTER-0 > table > tbody > tr > td:nth-child(1):before, #pcu-worldexplorer-in #quoteUpdate-content-container-BEFORE-3 > table > tbody > tr > td:nth-child(1):before": {
        "@media (max-width: 600px)": {
          "content": "'Deductible'"
        }
      },
      "#pcu-worldexplorer-in #quote-content-container-AFTER-0 > table > tbody > tr > td:nth-child(2):before, #pcu-worldexplorer-in #quoteUpdate-content-container-BEFORE-3 > table > tbody > tr > td:nth-child(2):before": {
        "@media (max-width: 600px)": {
          "content": "'Total Coverage'"
        }
      },
      "#pcu-worldexplorer-in #quote-content-container-AFTER-0 > table > tbody > tr > td:nth-child(3):before, #pcu-worldexplorer-in #quoteUpdate-content-container-BEFORE-3 > table > tbody > tr > td:nth-child(3):before": {
        "@media (max-width: 600px)": {
          "content": "'Additional Benefits'"
        }
      },
      "#quote-content-container-BEFORE-3": {
        "margin": "20px"
      },
      "#quote-content-container-AFTER-0": {
        "margin": "0px"
      },
      "#pcu-worldexplorer-in #quote-price-label": {
        "display": "none"
      },
      "#pcu-worldexplorer-in #quote-view-container td img": {
        "margin": "auto",
        "borderRadius": "50px"
      },
      "#pcu-worldexplorer-in #quote-view-container view-title": {
        "marginBottom": ".75em"
      },
      "#pcu-worldexplorer-in label[for=policy-deductible-0],label[for=policy-deductible-100],label[for=policy-deductible-250],label[for=policy-deductible-500],label[for=policy-maxMedicalBenefit-250000],label[for=policy-maxMedicalBenefit-1000000],,label[for=policy-maxMedicalBenefit-2000000]": {
        "transition": "200ms",
        "background": "#FFF",
        "borderRadius": "6px",
        "fontSize": "16px !important",
        "border": "1px solid var(--color-primary)",
        "padding": ".5rem",
        "display": "block"
      },
      "#pcu-worldexplorer-in #policy-adventureSports-field-container": {
        "width": "80%",
        "display": "block",
        "marginLeft": "auto",
        "@media (max-width: 600px)": {
          "marginTop": "1 rem",
          "marginLeft": "unset",
          "flexDirection": "column",
          "textAlign": "center",
          "width": "100%"
        }
      },
      "label[for=policy-adventureSports]": {
        "marginLeft": "-25%"
      },
      "#pcu-worldexplorer-in #policy-marineActivities-field-container": {
        "margin": "0 0 0 55%",
        "marginTop": "-40px",
        "@media (max-width: 600px)": {
          "margin": "unset",
          "flexDirection": "column",
          "textAlign": "center",
          "width": "100%"
        }
      },
      "#pcu-worldexplorer-in #policy-disabledMarine-field-container": {
        "margin": "0 0 0 55%",
        "marginTop": "-40px",
        "@media (max-width: 600px)": {
          "margin": "unset",
          "flexDirection": "column",
          "textAlign": "center",
          "width": "100%"
        }
      },
      "#policy-adventureSports-field-container > div:nth-child(1)": {
        "margin": "0 55% 0 0",
        "width": "40%"
      },
      "#policy-marineActivities-field-container #policy-disabledMarine-field-container .input-error, #policy-adventureSports-field-container .input-error": {
        "maxWidth": "180px",
        "textAlign": "center",
        "@media (max-width: 600px)": {
          "margin": "unset",
          "maxWidth": "100%"
        }
      },
      "#pcu-worldexplorer-in #quote-view-wrapper .checkbox-wrapper": {
        "@media (max-width: 600px)": {
          "display": "inline-flex",
          "margin": "unset"
        }
      },
      "#policy-samePassportAsDestination, #policy-passengerOne-samePassportAsDestinationOne, #policy-passengerTwo-samePassportAsDestinationOne, #policy-passengerThree-samePassportAsDestinationOne, #policy-passengerFour-samePassportAsDestinationOne": {
        "display": "none"
      },
      "#policy-passengerOne-address-line2-field-container > label > span, #policy-passengerTwo-address-line2-field-container > label > span, #policy-passengerThree-address-line2-field-container > label > span, #policy-passengerFour-address-line2-field-container > label > span": {
        "display": "none"
      },
      "label[for=policy-marineActivities]": {
        "display": "none"
      },
      "label[for=policy-disabledMarine]": {
        "display": "none"
      },
      "label[for=policy-samePassportAsDestination], label[for=policy-passengerOne-samePassportAsDestinationOne], label[for=policy-passengerTwo-samePassportAsDestinationOne], label[for=policy-passengerThree-samePassportAsDestinationOne], label[for=policy-passengerFour-samePassportAsDestinationOne]": {
        "display": "none"
      },
      "#policy-samePassportAsDestination-field-container .input-error, #policy-passengerOne-samePassportAsDestinationOne .input-error, #policy-passengerTwo-samePassportAsDestinationOne .input-error, #policy-passengerThree-samePassportAsDestinationOne .input-error, #policy-passengerFour-samePassportAsDestinationOne .input-error": {
        "textAlign": "center"
      },
      "#pcu-worldexplorer-in #policy-deductible-field-container input[type=radio], #pcu-worldexplorer-in #policy-maxMedicalBenefit-field-container input[type=radio], #policy-plan-field-container input[type=radio], #policy-paymentPlan-field-container input[type=radio]": {
        "border": "0",
        "clip": "rect(0, 0, 0, 0)",
        "height": "1px",
        "overflow": "hidden",
        "padding": "0",
        "position": "absolute !important",
        "whiteSpace": "nowrap",
        "width": "1px"
      },
      "#pcu-worldexplorer-in #policy-deductible-field-container input[type=radio]:hover + label, #pcu-worldexplorer-in #policy-maxMedicalBenefit-field-container input[type=radio]:hover + label": {
        "background": "var(--background-secondary)",
        "color": "var(--color-primary)"
      },
      "#pcu-worldexplorer-in #policy-deductible-field-container input[type=radio]:focus + label, #pcu-worldexplorer-in #policy-maxMedicalBenefit-field-container input[type=radio]:focus + label": {
        "background": "#999",
        "fill": "#000",
        "color": "#000"
      },
      "#pcu-worldexplorer-in #policy-deductible-field-container input[type=radio]:checked:hover + label, #pcu-worldexplorer-in #policy-maxMedicalBenefit-field-container input[type=radio]:checked:hover + label": {
        "background": "var(--background-secondary)",
        "fontWeight": "700",
        "fill": "#000"
      },
      "#pcu-worldexplorer-in #policy-deductible-field-container input[type=radio]:checked:focus + label, #pcu-worldexplorer-in #policy-maxMedicalBenefit-field-container input[type=radio]:checked:focus + label": {
        "border": "1px solid var(--color-secondary)",
        "fill": "#000",
        "background": "var(--background-secondary)",
        "color": "var(--color-secondary)",
        "display": "block"
      },
      "#pcu-worldexplorer-in #policy-deductible-field-container input[type=radio]:checked + label, #pcu-worldexplorer-in #policy-maxMedicalBenefit-field-container input[type=radio]:checked + label": {
        "border": "1px solid var(--color-secondary)",
        "fill": "#000",
        "background": "var(--background-secondary)",
        "color": "var(--color-secondary)",
        "display": "block"
      },
      "#pcu-worldexplorer-in #policy-additionalActivities-field-container > div > fieldset": {
        "display": "flex"
      },
      "#pcu-worldexplorer-in #policy-additionalActivities-field-container > div > fieldset > *": {
        "margin": "auto 1rem"
      },
      "#pcu-worldexplorer-in #policy-deductible-field-container, #pcu-worldexplorer-in #policy-maxMedicalBenefit-field-container, #policy-additionalActivities-field-container, #pcu-worldexplorer-in #destination-view-container": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center"
      },
      ".view-container": {
        "marginTop": "0",
        "minHeight": "350px"
      },
      ".array-editor-buttons-container": {
        "justifyContent": "center"
      },
      "#nav-button-container, #checkout-button-wrapper": {
        "@media (max-width: 660px)": {
          "flexDirection": "row-reverse",
          "justifyContent": "space-between"
        }
      },
      ".progress-bar": {
        "backgroundColor": "var(--color-secondary)"
      },
      ".progress-bar-label": {
        "display": "none"
      },
      ".view-title": {
        "marginTop": "3rem"
      },
      ".input-select": {
        "paddingBottom": "14px"
      },
      ".input-text, .input-select": {
        "color": "var(--color-text-primary)",
        "border": "solid 1px",
        "borderRadius": "10px",
        "borderColor": "#d0d0d6",
        "fontSize": "16px",
        "height": "auto"
      },
      ".input-label": {
        "fontSize": "14px",
        "fontFamily": "Rubik, sans-serif",
        "color": "var(--color-text-primary)"
      },
      ".input-error": {
        "textAlign": "center",
        "fontSize": "12px!important",
        "@media (max-width: 600px)": {
          "textAlign": "center",
          "fontSize": "11px",
          "marginBottom": "10px"
        }
      },
      ".input-invalid": {
        "color": "#D62719"
      },
      ".radio-button-wrapper": {
        "display": "flex"
      },
      "input[type=radio], input[type=checkbox]": {
        "borderRadius": "5px"
      },
      ".radio-button-label, .checkbox-wrapper label": {
        "marginLeft": "0",
        "padding": ".5rem",
        "@media (max-width: 600px)": {
          "fontSize": "14px"
        }
      },
      "label[for=\"policy-plan\"], label[for=\"policy-planPayment\"]": {
        "border": "none!important"
      },
      "#policy-planPayment-radio-button-wrapper": {
        "marginBottom": "1rem"
      },
      ".single-form-view-container": {
        "borderBottomColor": "none"
      },
      "body": {
        "fontFamily": "Rubik, sans-serif",
        "fontSize": "16px",
        "color": "var(--color-text-primary)",
        "@media (max-width: 600px)": {
          "fontSize": "16px"
        },
        "margin": "0 auto"
      },
      "h1": {
        "fontWeight": "600",
        "fontSize": "35px",
        "color": "var(--color-primary)"
      },
      "h2": {
        "fontWeight": "400!important",
        "marginTop": "2rem",
        "fontSize": "35px",
        "color": "var(--color-secondary)!important"
      },
      "h3": {
        "fontWeight": "600",
        "fontSize": "20px",
        "fontFamily": "Rubik, sans-serif",
        "color": "var(--color-primary)!important"
      },
      "th": {
        "backgroundColor": "var(--color-primary)",
        "color": "#FFF!important"
      },
      "p": {
        "lineHeight": "1.5em!important"
      },
      "a": {
        "color": "var(--color-secondary)!important"
      },
      "li": {
        "marginTop": "0px!important",
        "marginBottom": "0px!important",
        "lineHeight": "1.5rem!important"
      },
      "#checkout-button": {
        "display": "flex"
      },
      ".array-items-add-button": {
        "minWidth": "400px!important",
        "@media (max-width: 600px)": {
          "minWidth": "unset!important",
          "padding": ".5rem"
        }
      },
      ".array-items-add-icon": {
        "@media (max-width: 600px)": {
          "display": "inherit"
        }
      },
      ".button-primary[data-content=\"destination-next-button\"]": {
        "minWidth": "350px",
        "padding": "0 75px",
        "@media (max-width: 600px)": {
          "width": "100%"
        }
      },
      ".button-secondary": {
        "textTransform": "uppercase",
        "padding": 0,
        "color": "#FFF",
        "fontWeight": "bold",
        "fontSize": "14px",
        "height": "40px",
        "background": "var(--color-secondary)",
        ".no-touch &:hover": {
          "backgroundColor": "var(--color-primary)",
          "color": "#fff",
          "textDecoration": "none"
        },
        "@media (max-width: 600px)": {
          "display": "inline-block",
          "marginTop": "0px!important"
        }
      },
      ".button-primary": {
        "textTransform": "uppercase",
        "padding": 0,
        "color": "#fff",
        "fontWeight": "bold",
        "fontSize": "14px",
        "height": "40px",
        "width": "fit-content",
        "background": "var(--color-primary)",
        ".no-touch &:hover": {
          "backgroundColor": "var(--color-secondary)",
          "color": "#fff"
        },
        "@media (max-width: 600px)": {
          "display": "inline-block"
        }
      },
      "button": {
        "transition": "background-color .4s ease 0s",
        "minWidth": "150px!important",
        "borderRadius": "10px!important",
        "@media (max-width: 600px)": {
          "minWidth": "100px!important"
        }
      },
      ".form-radio:checked, .form-radio:focus, .form-checkbox:checked": {
        "background": "var(--color-secondary)"
      },
      "select": {
        "borderRadius": "10px!important"
      },
      ".card": {
        "background": "var(--background-primary)"
      },
      ".tooltip": {
        "verticalAlign": "middle",
        "marginLeft": "2px"
      },
      ".array-fields-container": {
        "display": "unset",
        "gridGap": "0px!important",
        "@media (max-width: 600px)": {
          "width": "100%!important"
        }
      }
    },
    "colors": {
      "primary": "#61A3B3",
      "secondary": "#515065",
      "textPrimary": "#40352C",
      "backgroundPrimary": "#f9f7f2",
      "backgroundSecondary": "rgba(97,163,179, 0.15)"
    },
    "webFonts": [
      "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap"
    ]
  }
};;


export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for testing the Offer Element"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Offer Element
          </h1>
        </div>

        <Dialog>
          <DialogTrigger>
            <img src="/realtor.png" />
          </DialogTrigger>
          <DialogContent className="DialogContent">
            <BuddyOfferElement
              ion={options.ion}
              partnerID={options.partnerID}
              theme={options.theme}
              data={options.data}
              stage="TESTING"
            />
          </DialogContent>
        </Dialog>




      </section>
    </Layout>
  )
}
