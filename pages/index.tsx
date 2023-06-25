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
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
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
        </div>


      </section>
    </Layout>
  )
}
