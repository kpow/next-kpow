const themeBase = {
	baseTheme: 'base',
	palette: 'base',
	overrides: {
		styles: {
			'#allstate-auto div[case=single-form], #allstate-auto div[case=paginated],': {
				backgroundColor: '#fff',
				padding: '3rem',
				marginLeft: '0',
				'@media (min-width: 992px)': {
					marginLeft: '220px'
				}
			},
			'#allstate-auto': {
				'#offer-view-container': {
					'h2, h3': {
						textAlign: 'left',
						'@media (min-width: 768px)': {}
					},
					p: {
						marginTop: '2rem',
						fontStyle: 'italic'
					}
				},
				'#rcTwo-success-view-title': {
					display: 'none'
				},
				'#policy-frequencyCode-field-container': {
					marginTop: '0rem'
				},
				'#policy-methodCode-radio-button-wrapper': {
					'.radio-button-option-wrapper': {
						marginLeft: '0px'
					},
					div: {
						display: 'flex',
						flexDirection: 'column',
						padding: '1rem 2rem',
						backgroundColor: '#0E1941',
						color: '#FFF',
						width: '250px',
						'@media (max-width: 660px)': {
							padding: 'unset',
							display: 'inline-flex',
							height: 'auto',
							'border-radius': '2.5rem',
							border: 'none',
							minWidth: '150px',
							width: 'unset',
							justifyContent: 'space-between'
						}
					},
					'input:checked:before': {
						border: '0.4rem solid #FFF'
					},
					'@media (max-width: 660px)': {
						width: 'fit-content',
						minWidth: '330px',
						'background-color': '#f5f5f5',
						backgroundImage: 'url("https://s3.amazonaws.com/staging.embed.buddy.insure/allstate/auto/divVert.png")',
						'background-position-x': 'calc(0% + 114px)',
						'background-position-y': 'center',
						'background-repeat': 'no-repeat',
						border: '0.0625rem solid #bbc7d4',
						'border-radius': '2.5rem',
						'.radio-button-option-wrapper': {
							margin: '0px!important',
							marginLeft: '0px!important'
						},
						'.radio-button-label': {
							'background-color': '#f5f5f5'
						},
						'div:nth-child(1)': {
							marginLeft: '0rem!important'
						},
						'div:nth-child(2)': {
							'margin-left': '1rem!important'
						}
					}
				},
				'label[for=policy-methodCode-BankAccount], label[for=policy-methodCode-CreditCard]': {
					paddingTop: '1rem',
					marginLeft: '0rem',
					'@media (max-width: 660px)': {
						paddingTop: '0rem',
						marginLeft: '0rem',
						border: '0.0625rem solid #f5f5f5'
					}
				},
				'#policy-methodCode-radio-button-wrapper input': {
					'@media (max-width: 660px)': {
						position: 'absolute !important',
						clip: 'rect(0, 0, 0, 0)',
						width: '1px',
						border: '0',
						overflow: 'hidden'
					}
				},
				'#policy-methodCode-radio-button-wrapper label': {
					'@media (max-width: 660px)': {
						color: '#333',
						'font-size': '16px',
						'text-align': 'center',
						padding: '0.5rem 1rem',
						border: '0.0625rem solid #f5f5f5',
						'border-radius': '2.5rem',
						width: '100%'
					}
				},
				'#policy-methodCode-radio-button-wrapper > #radio-button-option-wrapper': {
					'@media (max-width: 660px)': {
						content: "''",
						position: 'absolute',
						right: '-0.625rem',
						transform: 'translateY(-50%)',
						height: '1rem',
						'border-right': 'none'
					}
				},
				'#policy-methodCode-radio-button-wrapper label:hover': {
					'@media (max-width: 660px)': {
						cursor: 'pointer',
						backgroundColor: '#D9EEFF',
						border: '0.0625rem solid #D9EEFF',
						'border-radius': '2.5rem'
					}
				},
				'#policy-methodCode-radio-button-wrapper input:checked + label': {
					'@media (max-width: 660px)': {
						'background-color': '#0e1941',
						'border-radius': '2.5rem',
						color: '#FFF',
						border: '0.3rem solid #45bce5'
					}
				},
				'#policy-methodCode-radio-button-wrapper input:checked:hover + label': {
					'@media (max-width: 660px)': {
						'background-color': 'aliceblue',
						'border-radius': '2.5rem',
						color: '#333'
					}
				},
				'#policy-frequencyCode-radio-button-wrapper, #policy-violationsInFiveYears-radio-button-wrapper, #policy-addEsmartDiscount-radio-button-wrapper, #policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper, #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper, #policy-rideShareUsage-radio-button-wrapper, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper, #policy-initialCurrentlyCovered-radio-button-wrapper, #policy-originalOwned-radio-button-wrapper': {
					'background-color': '#f5f5f5',
					backgroundImage: 'url("https://s3.amazonaws.com/staging.embed.buddy.insure/allstate/auto/divVert.png")',
					'background-position-x': 'center',
					'background-position-y': 'center',
					'background-repeat': 'no-repeat',
					display: 'inline-flex',
					height: 'auto',
					'border-radius': '2.5rem',
					border: '0.0625rem solid #bbc7d4',
					minWidth: '150px',
					justifyContent: 'space-between',
					'.radio-button-option-wrapper': {
						margin: '0px!important',
						marginLeft: '0px!important'
					},
					'.radio-button-label': {
						border: '0.3rem solid #f5f5f5'
					},
					'div:nth-child(1)': {
						marginLeft: '-1rem!important'
					},
					'div:nth-child(2)': {
						marginLeft: '1rem!important'
					}
				},
				'#policy-frequencyCode-radio-button-wrapper': {
					'background-position-x': 'calc(0% + 114px)',
					'@media (max-width: 660px)': {
						'min-width': '330px'
					}
				},
				'#policy-frequencyCode-radio-button-wrapper input, #policy-violationsInFiveYears-radio-button-wrapper input, #policy-addEsmartDiscount-radio-button-wrapper input, #policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper input, #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper input, #policy-rideShareUsage-radio-button-wrapper input, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper input, #policy-initialCurrentlyCovered-radio-button-wrapper input, #policy-originalOwned-radio-button-wrapper input': {
					position: 'absolute !important',
					clip: 'rect(0, 0, 0, 0)',
					width: '1px',
					border: '0',
					overflow: 'hidden'
				},
				'#policy-frequencyCode-radio-button-wrapper label, #policy-violationsInFiveYears-radio-button-wrapper label, #policy-addEsmartDiscount-radio-button-wrapper label, #policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper label, #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper label, #policy-rideShareUsage-radio-button-wrapper label, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper label, #policy-initialCurrentlyCovered-radio-button-wrapper label, #policy-originalOwned-radio-button-wrapper label': {
					color: '#333',
					'font-size': '16px',
					'text-align': 'center',
					padding: '.5rem 1rem',
					border: '0px solid rgba(0, 0, 0, 0.2)',
					'border-radius': '2.5rem',
					width: '100%'
				},
				'#policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper, #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper, #policy-rideShareUsage-radio-button-wrapper, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper, #policy-originalOwned-radio-button-wrapper': {
					display: 'flex',
					'.radio-button-option-wrapper': {
						width: '100%',
						textAlign: 'center'
					}
				},
				'#policy-frequencyCode-radio-button-wrapper > #radio-button-option-wrapper, #policy-violationsInFiveYears-radio-button-wrapper > #radio-button-option-wrapper, #policy-addEsmartDiscount-radio-button-wrapper > #radio-button-option-wrapper, #policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper > #radio-button-option-wrapper, #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper > #radio-button-option-wrapper, #policy-rideShareUsage-radio-button-wrapper > #radio-button-option-wrapper, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper > #radio-button-option-wrapper, #policy-initialCurrentlyCovered-radio-button-wrapper > #radio-button-option-wrapper, #policy-originalOwned-radio-button-wrapper > #radio-button-option-wrapper': {
					content: "''",
					position: 'absolute',
					right: '-0.625rem',
					transform: 'translateY(-50%)',
					height: '1rem',
					'border-right': '0.0625rem solid #bbc7d4'
				},
				'#policy-frequencyCode-radio-button-wrapper label:hover, #policy-violationsInFiveYears-radio-button-wrapper label:hover, #policy-addEsmartDiscount-radio-button-wrapper label:hover, #policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper label:hover, #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper label:hover, #policy-rideShareUsage-radio-button-wrapper label:hover, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper label:hover, #policy-initialCurrentlyCovered-radio-button-wrapper label:hover, #policy-originalOwned-radio-button-wrapper label:hover': {
					cursor: 'pointer',
					backgroundColor: '#D9EEFF'
				},
				'#policy-frequencyCode-radio-button-wrapper input:checked + label, #policy-violationsInFiveYears-radio-button-wrapper input:checked + label, #policy-addEsmartDiscount-radio-button-wrapper input:checked + label, #policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper input:checked + label, #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper input:checked + label, #policy-rideShareUsage-radio-button-wrapper input:checked + label, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper input:checked + label, #policy-initialCurrentlyCovered-radio-button-wrapper input:checked + label, #policy-originalOwned-radio-button-wrapper input:checked + label': {
					'background-color': '#0e1941',
					color: '#FFF',
					border: '0.3rem solid #45bce5'
				},
				'#policy-frequencyCode-radio-button-wrapper input:checked:hover + label, #policy-violationsInFiveYears-radio-button-wrapper input:checked:hover + label, #policy-addEsmartDiscount-radio-button-wrapper input:checked:hover + label, #policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper input:checked:hover + label, #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper input:checked:hover + label, #policy-rideShareUsage-radio-button-wrapper input:checked:hover + label, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper input:checked:hover + label, #policy-initialCurrentlyCovered-radio-button-wrapper input:checked:hover + label, #policy-originalOwned-radio-button-wrapper input:checked:hover + label': {
					'background-color': 'aliceblue',
					color: '#333'
				},
				'#policy-companyName, #policy-loanPeriod, #policy-routingNumber, #policy-accountNumber, #policy-accountNumberConfirmation, #policy-accountTypeCode, #policy-priorPolicies-provider, #policy-priorPolicies-yearsOfContinuousCoverage, #policy-priorPolicies-coverageLevels-bodilyInjuryLiability, #policy-priorPolicies-expirationDate, #policy-startDate, #policy-spouseInfo-spouseHasDriverLicense-radio-button-wrapper,  #policy-timeLivedAtCurrentAddressCode-radio-button-wrapper, #policy-driverLicenseState, #policy-driverLicenseNumber, #policy-ageFirstAutoDrivingLicenseIssued, #policy-rideShareUsage-radio-button-wrapper, #policy-annualMileage, #policy-primaryUseCode, #policy-odometerReading, #policy-vehicleYear, #policy-vin, #policy-maritalStatusCode, #policy-employmentStatusCode, #policy-genderCode, #policy-highestLevelOfEducation, #policy-state, #policy-primarilyParkedAtCurrentAddress-radio-button-wrapper, #policy-originalOwned-radio-button-wrapper': {
					maxWidth: '100%',
					'@media (min-width: 768px)': {
						maxWidth: '50%'
					}
				},
				'#policy-ownershipStatus-field-container, #policy-residenceTypeCode-field-container': {
					'background-color': '#F5F5F5',
					padding: '1rem!important',
					'@media (min-width: 768px)': {
						maxWidth: '75%'
					}
				},
				'#policy-accountTypeCode-field-container': {
					marginTop: '-0.25rem'
				},
				'#customerInfo-content-container-LABEL-DYNOMARK-1': {
					marginBottom: '1rem'
				},
				'#policy-tCPAConsent-checkbox-wrapper': {
					display: 'flex',
					'align-items': 'flex-start',
					borderTop: '1px solid var(--color-primary)',
					paddingTop: '0.75rem'
				},
				'#policy-tCPAConsent-true': {
					marginTop: '0.25rem'
				},
				'#policy-tCPAConsent-field-container': {
					padding: '1rem',
					backgroundColor: '#ececec'
				},
				'#policy-tCPAConsent-field-container > p.input-error': {
					display: 'none'
				},
				'.radio-button-option-wrapper': {
					marginTop: '6px',
					marginLeft: '10px',
					'@media (min-width: 768px)': {
						marginTop: '10px'
					}
				},
				'#policy-vehicleCoverages-rideForHire-radio-button-wrapper > .radio-button-option-wrapper': {
					'@media (min-width: 768px)': {
						marginTop: '-4px'
					}
				},
				'#policy-vehicleCoverages-transportationExpenseDetails, #policy-vehicleCoverages-towingAndLaborDetails, #policy-vehicleCoverages-comprehensiveDetails, #policy-vehicleCoverages-collisionDetails, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryDetails, #policy-coverages-medicalExpensesDetails, #policy-coverages-propertyDamageLiabilityDetails, #policy-coverages-uninsuredMotoristPropertyDamageDetails, #policy-coverages-deathIndemnityCoverageDetails, #policy-coverages-bodilyInjuryLiabilityDetails, #policy-payInFullBankAccountInfo, #policy-payInFullCreditCardInfo, #policy-monthlyCreditCardInfo, #policy-monthlyBankAccountInfo, #policy-violationsValidationInfo, #policy-vehicleCoverages-collisionInfo, #policy-vehicleCoverages-comprehensiveInfo, #policy-vehicleCoverages-comprehensiveCoverageRule, #policy-vehicleCoverages-collisionCoverageRule, #policy-lienHolderAddress-lienHolderAddressPostalCodeRule, #policy-lienHolderAddress-lienHolderAddressStateRule, #policy-lienHolderAddress-lienHolderAddressCityRule, #policy-lienHolderAddress-lienHolderAddressLine1Rule, #policy-loanPeriodRule, #policy-companyNameRule, #policy-bindConsentValidationRule, #policy-tCPAConsentValidationRule, #policy-violationsValidationRule, #policy-accountNumberConfirmationRule, #policy-vehicleCoverages-transportationExpenseRule, #policy-vehicleCoverages-autoReplacementProtectionRule, #policy-vehicleCoverages-mediaRule, #policy-vehicleCoverages-excessElectronicEquipmentRule, #policy-vehicleCoverages-customEquipmentComprehensiveRule, #policy-vehicleCoverages-customEquipmentCollisionRule, #policy-coverages-uninsuredMotoristPropertyDamageRule, #policy-vehicleCoverages-coverageForOthers, #policy-vehicleCoverages-autoReplacementProtectionInfo, #policy-coverages-coversYouAndOthers, #policy-vehicleCoverages-coverageForOthersInfo, label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryRule], #policy-coverages-uninsuredMotoristPropertyDamageInfo, #policy-coverages-coversYouAndOthersInfo, #policy-coverages-coverageForOthersInfo, label[for=policy-stateBad], label[for=policy-manuallyEnterAddress], #policy-vehicleCoverages-autoReplacementProtectionDetails': {
					display: 'none'
				},
				'#policy-coverages-bodilyInjuryLiability-field-container, #policy-coverages-propertyDamageLiability-field-container, #policy-coverages-medicalExpenses-field-container, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjury-field-container, #policy-coverages-uninsuredMotoristPropertyDamage-field-container, #policy-coverages-deathIndemnityCoverage-field-container, #policy-vehicleCoverages-collision-field-container, #policy-vehicleCoverages-comprehensive-field-container, #policy-vehicleCoverages-transportationExpense-field-container, #policy-vehicleCoverages-towingAndLabor-field-container, #policy-vehicleCoverages-autoReplacementProtection-field-container, #policy-vehicleCoverages-media-field-container, #policy-vehicleCoverages-excessElectronicEquipment-field-container, #policy-vehicleCoverages-customEquipmentComprehensive-field-container, #policy-vehicleCoverages-customEquipmentCollision-field-container, #policy-vehicleCoverages-customEquipmentCollision-field-container': {
					paddingLeft: '10px',
					paddingRight: '10px',
					fontWeight: '400!important',
					marginTop: '1rem!important',
					marginBottom: '2rem!important'
				},
				'label[for=policy-vehicleCoverages-excessElectronicEquipmentDetails], label[for=policy-coverages-deathIndemnityCoverageDetails], label[for=policy-vehicleCoverages-transportationExpenseDetails]': {
					fontWeight: '400!important'
				},
				'#policy-payInFullBankAccountInfo-field-container, #policy-payInFullCreditCardInfo-field-container, #policy-monthlyCreditCardInfo-field-container, #policy-monthlyBankAccountInfo-field-container': {
					textAlign: 'center',
					width: '250px',
					border: '1px solid #0E1941',
					padding: '26px 10px 20px 10px',
					marginTop: '-0.75rem',
					'@media (max-width: 660px)': {
						minWidth: '300px'
					}
				},
				'#policy-payInFullBankAccountInfo-field-container': {
					marginTop: '0rem!important'
				},
				'#policy-monthlyCreditCardInfo-field-container': {
					marginTop: '-14.65rem!important'
				},
				'#policy-payInFullCreditCardInfo-field-container': {
					marginTop: '-10rem!important',
					height: '160px'
				},
				'#policy-monthlyBankAccountInfo-field-container': {
					marginTop: '0rem!important'
				},
				'#policy-monthlyBankAccountInfo-field-container, #policy-payInFullBankAccountInfo-field-container': {
					'@media (max-width: 660px)': {
						marginTop: '1rem!important',
						'&:before': {
							content: "'Bank Account'"
						}
					}
				},
				'#policy-payInFullCreditCardInfo-field-container, #policy-monthlyCreditCardInfo-field-container': {
					marginLeft: '290px',
					'@media (max-width: 660px)': {
						marginLeft: '0px',
						marginTop: '1rem!important',
						height: 'fit-content',
						'@media (max-width: 660px)': {
							'&:before': {
								content: "'Credit Card'"
							}
						}
					}
				},
				'#policy-routingNumber-field-container': {
					marginTop: '5rem!important'
				},
				'#paymentSelection-content-container-LABEL-DYNOMARK-1': {
					span: {
						display: 'block',
						fontWeight: '400!important'
					}
				},
				'#policy-accountNumberConfirmationRule-field-container': {
					marginTop: '0rem!important',
					'.input-error': {}
				},
				'#policy-bindConsent-field-container > p.input-error': {
					display: 'none'
				},
				'#policy-lienHolderAddress-lienHolderAddressPostalCodeRule-field-container, #policy-lienHolderAddress-lienHolderAddressStateRule-field-container, #policy-lienHolderAddress-lienHolderAddressCityRule-field-container, #policy-lienHolderAddress-lienHolderAddressLine1Rule-field-container, #policy-loanPeriodRule-field-container, #policy-companyNameRule-field-container': {
					marginTop: '0rem!important'
				},
				'#policy-addEsmartDiscount-field-container': {
					display: 'column',
					width: '50%'
				},
				'label[for=policy-addEsmartDiscount]': {
					display: 'flex',
					justifyContent: 'space-between'
				},
				'#discountOptions-content-container-LABEL-DYNOMARK-1 > span > em': {},
				'#rcTwo-success-view-container, #paymentSelection-view-container': {
					display: 'flex',
					flexDirection: 'column',
					h2: {
						marginTop: '1rem',
						fontSize: '2rem',
						textAlign: 'center',
						'@media (min-width: 768px)': {
							fontSize: '2.5rem'
						}
					},
					'h2:first-of-type': {
						textAlign: 'left',
						lineHeight: '2.25rem',
						'@media (min-width: 768px)': {
							fontSize: '2.5rem'
						}
					},
					'#paymentSelection-content-container-BEFORE-1': {
						textAlign: 'center',
						marginTop: '1rem',
						h2: {
							marginTop: '1rem',
							fontSize: '2.5rem'
						}
					},
					'#paymentSelection-content-container-BEFORE-0': {
						'@media (min-width: 992px)': {
							flexDirection: 'column'
						},
						h2: {
							marginTop: 'unset',
							marginBottom: 'unset',
							color: 'var(--color-text-primary)',
							padding: '0.85rem',
							fontSize: '2.5rem',
							'background-color': 'var(--color-secondary)',
							'border-radius': '2rem',
							minWidth: '190px'
						}
					}
				},
				'#paymentSelection-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-9, #vehicleCoverageCustomization-content-container-AFTER-0, #discountOptions-content-container-BEFORE-0': {
					display: 'flex',
					flexDirection: 'column',
					'align-items': 'center',
					'justify-content': 'center',
					'align-content': 'stretch',
					backgroundColor: '#E4EFF9',
					padding: '20px',
					width: 'fit-content',
					margin: '1.5rem auto',
					border: '2px solid #D3D3D3',
					'border-radius': '.25rem',
					'@media (min-width: 992px)': {
						flexDirection: 'row'
					},
					h1: {
						marginLeft: '1rem',
						marginRight: '1rem',
						'margin-bottom': '0.25em',
						padding: '0.85rem',
						fontSize: '3.5rem!important',
						minWidth: '100px',
						'background-color': 'var(--color-secondary)',
						color: 'var(--color-text-primary)',
						'border-radius': '2rem'
					},
					'h1::before': {
						content: "'$'",
						fontSize: '1.75rem',
						verticalAlign: 'top'
					},
					'h2::before': {
						content: "'$'",
						fontSize: '1.25rem',
						verticalAlign: 'top'
					},
					h2: {
						marginLeft: '1rem',
						marginRight: '1rem',
						'margin-bottom': '0.25em',
						padding: '0.85rem',
						fontSize: '2.5rem',
						'background-color': 'var(--color-secondary)',
						color: 'var(--color-text-primary)',
						'border-radius': '2rem'
					},
					'p:first-of-type': {
						'font-weight': 'bold',
						'font-size': '1rem',
						'margin-bottom': '1rem'
					},
					p: {
						'margin-top': '0rem!important',
						'margin-bottom': '0rem!important'
					}
				},
				'#rcTwo-success-content-container-BEFORE-1': {
					margin: 'unset'
				},
				'#quoteInterstitial-content-container-BEFORE-9 > p:nth-child(2)': {
					'margin-bottom': '.5rem'
				},
				'label[for=policy-violationsValidationInfo]': {
					backgroundColor: '#FFF',
					padding: '1rem'
				},
				'#quoteMockFollowUp-view-container .input-label span, #vehicleCoverageCustomization-view-container .input-label span': {
					fontWeight: '300'
				},
				'#quoteMockFollowUp-view-container .input-label strong, #vehicleCoverageCustomization-view-container .input-label strong': {
					fontWeight: '700'
				},
				'label[for=policy-methodCode], label[for=policy-frequencyCode], label[for=policy-manuallyEnterLienHolderAddress], label[for=policy-manuallyEnterPriorAddress], label[for=policy-vehicleCoverages-collisionCoverageRule], label[for=policy-vehicleCoverages-comprehensiveCoverageRule], label[for=policy-lienHolderAddress-lienHolderAddressStateRule], label[for=policy-lienHolderAddress-lienHolderAddressPostalCodeRule], label[for=policy-lienHolderAddress-lienHolderAddressCityRule], label[for=policy-lienHolderAddress-lienHolderAddressLine1Rule], label[for=policy-loanPeriodRule], label[for=policy-companyNameRule], label[for=policy-bindConsentValidationRule], label[for=policy-tCPAConsentValidationRule], label[for=policy-bindConsent], label[for=policy-violationsValidationRule], label[for=policy-accountNumberConfirmationRule], label[for=policy-vehicleCoverages-customEquipmentCollisionRule], label[for=policy-vehicleCoverages-customEquipmentComprehensiveRule], label[for=policy-vehicleCoverages-excessElectronicEquipmentRule], label[for=policy-vehicleCoverages-mediaRule], label[for=policy-vehicleCoverages-autoReplacementProtectionRule], label[for=policy-vehicleCoverages-transportationExpenseRule], label[for=policy-coverages-uninsuredMotoristPropertyDamageRule], label[for=policy-violationsInFiveYears], label[for=policy-coverages-bodilyInjuryLiability], label[for=policy-coverages-propertyDamageLiability], label[for=policy-coverages-medicalExpenses], label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjury], label[for=policy-coverages-uninsuredMotoristPropertyDamage], label[for=policy-vehicleCoverages-customEquipmentCollision], label[for=policy-vehicleCoverages-customEquipmentComprehensive], label[for=policy-vehicleCoverages-customEquipmentComprehensive], label[for=policy-vehicleCoverages-excessElectronicEquipment], label[for=policy-vehicleCoverages-media], label[for=policy-vehicleCoverages-transportationExpense], label[for=policy-vehicleCoverages-comprehensive], label[for=policy-vehicleCoverages-collision], #quote-price-label-container, label[for=policy-vehicleCoverages-autoReplacementProtection]': {
					display: 'none'
				},
				'#quoteInterstitial-content-container-BEFORE-1 p': {
					fontSize: '1.2rem',
					marginBottom: '.5rem'
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #policySummary-content-container-BEFORE-0': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: '#E4EFF9',
					padding: '20px',
					width: 'fit-content',
					margin: '1.5rem auto',
					border: '2px solid #D3D3D3',
					'border-radius': '.25rem',
					h1: {
						'margin-bottom': '.1em!important',
						'margin-top': '.2em!important',
						color: 'var(--color-text-primary)',
						padding: '0.85rem',
						fontSize: '3.5rem!important',
						'background-color': 'var(--color-secondary)',
						'border-radius': '2rem',
						minWidth: '100px',
						width: 'fit-content',
						minHeight: '80px',
						textAlign: 'center'
					},
					'h1::before': {
						content: "'$'",
						fontSize: '1.75rem',
						verticalAlign: 'top'
					},
					'p:first-of-type': {
						'font-weight': 'bold',
						'font-size': '1rem',
						'margin-top': '.25rem!important'
					},
					p: {
						'margin-top': '0.5rem!important',
						'margin-bottom': '0rem!important'
					},
					'strong::before': {
						content: "'$'",
						fontSize: '1.75rem',
						verticalAlign: 'top'
					},
					strong: {
						color: 'var(--color-text-primary)',
						'background-color': 'var(--color-secondary)',
						'border-radius': '2rem',
						padding: '1.25rem',
						fontSize: '2.5rem',
						display: 'block',
						textAlign: 'center'
					},
					em: {
						display: 'block',
						marginTop: '.2rem',
						textAlign: 'center'
					}
				},
				'label[for=policy-vehicleCoverages-coverageForOthers] > #vehicleCoverageCustomization-content-container-LABEL-DYNOMARK-1 > span:nth-child(1) > strong, label[for=policy-coverages-coverageForOthersInfo] > #quoteMockFollowUp-content-container-LABEL-DYNOMARK-1 span:nth-child(1), label[for=policy-coverages-coversYouAndOthers] > #quoteMockFollowUp-content-container-LABEL-DYNOMARK-1 > span:nth-child(1)': {
					fontWeight: 'bold!important',
					fontSize: '18px',
					display: 'block'
				},
				'#policy-vehicleCoverages-comprehensiveCoverageRule-field-container > p.input-error, #policy-vehicleCoverages-collisionCoverageRule-field-container > p.input-error, #policy-tCPAConsentValidationRule-field-container > p.input-error': {
					marginTop: '-20px!important'
				},
				'#policy-vehicleCoverages-collisionInfo-field-container, #policy-vehicleCoverages-comprehensiveInfo-field-container, #policy-vehicleCoverages-autoReplacementProtectionInfo-field-container, #policy-vehicleCoverages-customEquipmentCollisionInfo-field-container, #policy-vehicleCoverages-customEquipmentComprehensiveInfo-field-container, #policy-vehicleCoverages-excessElectronicEquipmentInfo-field-container, #policy-vehicleCoverages-mediaInfo-field-container, #policy-vehicleCoverages-transportationExpenseInfo-field-container, #policy-coverages-uninsuredMotoristPropertyDamageInfo-field-container, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryInfo-field-container': {
					marginTop: '-10px!important'
				},
				'#quoteMockFollowUp-content-container-LABEL-DYNOMARK-1 > span:nth-child(2) > strong': {
					fontWeight: '400!important'
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-9, #policySummary-content-container-BEFORE-0': {
					h1: {
						'@media (max-width: 990px)': {
							'text-align': 'center',
							'min-height': '48px'
						}
					}
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #policySummary-content-container-BEFORE-0': {
					'@media (min-width: 992px)': {
						position: 'fixed',
						marginLeft: '-260px',
						backgroundColor: '#fff',
						padding: '1.5rem',
						'border-radius': 'unset',
						border: '0px'
					}
				},
				'#policy-violationsInFiveYears-field-container': {
					marginTop: '0rem',
					marginBottom: '2rem'
				},
				table: {
					color: 'var(--color-text-primary)'
				},
				'td strong': {
					marginLeft: 'unset',
					'@media (min-width: 768px)': {
						marginLeft: '-1rem',
						color: 'var(--color-text-primary)'
					}
				},
				td: {
					padding: '.5rem',
					paddingLeft: '1rem',
					'@media (min-width: 768px)': {
						paddingLeft: '1.65rem'
					}
				},
				thead: {
					backgroundColor: 'var(--color-primary)',
					color: '#fff'
				},
				'table > thead > tr > th': {
					backgroundColor: 'var(--color-primary)',
					color: '#fff'
				},
				'#nav-button-container:not(#quoteMock-view-container)': {
					justifyContent: 'center',
					height: 0,
					margin: '4rem auto',
					marginTop: '6rem',
					'@media (min-width: 768px)': {
						height: '0.1875rem',
						margin: '4rem auto'
					}
				},
				'#next-button': {
					marginLeft: 'unset',
					'@media (min-width: 768px)': {
						marginLeft: '1rem'
					}
				},
				'#back-button': {
					marginRight: 'unset',
					width: '100%',
					'@media (min-width: 768px)': {
						width: 'auto'
					}
				},
				'#error-view-content-container-BEFORE-1': {
					marginBottom: '2rem'
				},
				'#paymentSelection-content-container-BEFORE-1, #secondChance-content-container-AFTER-1, #secondChanceState-content-container-AFTER-1': {
					marginTop: '2rem'
				},
				'#paymentSelection-content-container-BEFORE-1 > p > a, #secondChance-content-container-AFTER-1 > p > a, #secondChanceState-content-container-AFTER-1 > p > a, #paymentSelection-content-container-BEFORE-3 > p > a, #error-view-content-container-BEFORE-2 > p > a': {
					textTransform: 'lowercase',
					border: '2px solid var(--color-secondary)',
					borderRadius: '5rem !important',
					background: 'var(--color-secondary)',
					padding: '.5rem .75rem',
					color: 'var(--color-textPrimary)',
					fontSize: '1rem',
					'&:hover': {
						backgroundColor: '#fff',
						color: 'var(--color-secondary)',
						textDecoration: 'none'
					},
					'@media (min-width: 768px)': {
						minWidth: 'unset',
						padding: '.75rem 1.125rem'
					}
				},
				'#policy-addEsmartDiscountInfo, #policy-vehicleCoverages-transportationExpenseInfo, #policy-vehicleCoverages-excessElectronicEquipmentInfo, #policy-vehicleCoverages-mediaInfo, #policy-vehicleCoverages-customEquipmentComprehensiveInfo, #policy-vehicleCoverages-customEquipmentCollisionInfo, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryInfo, label[for=policy-priorPolicies-startDateExpirationDateStatus], label[for=quoteMockFollowUp-content-container-LABEL-DYNOMARK-1], #policy-priorPolicies-startDateExpirationDateStatus, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryRule, #policy-vehicleCoverages-rideForHireDetails, #policy-vehicleCoverages-customEquipmentCollisionDetails, #policy-vehicleCoverages-customEquipmentComprehensiveDetails, #policy-vehicleCoverages-mediaDetails, #policy-vehicleCoverages-excessElectronicEquipmentDetails': {
					display: 'none'
				},
				'#customerInfo-content-container-BELOW_NAV-0': {
					marginTop: '2rem'
				},
				'label[for=policy-vehicleCoverages-comprehensiveInfo], label[for=policy-vehicleCoverages-collisionInfo], label[for=policy-vehicleCoverages-customEquipmentCollisionInfo], label[for=policy-vehicleCoverages-customEquipmentComprehensiveInfo], label[for=policy-vehicleCoverages-excessElectronicEquipmentInfo], label[for=policy-vehicleCoverages-mediaInfo], label[for=policy-vehicleCoverages-autoReplacementProtectionInfo], label[for=policy-vehicleCoverages-transportationExpenseInfo], label[for=policy-coverages-uninsuredMotoristPropertyDamageInfo], label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryInfo], #vehicleVin-content-container-AFTER-0, #lienholderInfoReminder-content-container-BEFORE-1': {
					marginTop: '1.5rem',
					padding: '.5rem!important',
					backgroundColor: '#F2F6F9',
					fontWeight: 'normal'
				},
				'#vehicleCoverageCustomization-content-container-LABEL-DYNOMARK-1 > span:nth-child(2) > strong': {
					fontWeight: '400!important'
				},
				'label[for=policy-vehicleCoverages-comprehensiveInfo], label[for=policy-vehicleCoverages-collisionInfo], label[for=policy-vehicleCoverages-customEquipmentCollisionInfo], label[for=policy-vehicleCoverages-customEquipmentComprehensiveInfo], label[for=policy-vehicleCoverages-excessElectronicEquipmentInfo], label[for=policy-vehicleCoverages-mediaInfo], label[for=policy-vehicleCoverages-autoReplacementProtectionInfo], label[for=policy-vehicleCoverages-transportationExpenseInfo], label[for=policy-coverages-uninsuredMotoristPropertyDamageInfo], label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryInfo]': {
					padding: '1.25rem!important'
				},
				'#vehicleVin-content-container-AFTER-0': {
					p: {
						marginLeft: '1.5rem'
					},
					'p > strong': {
						color: 'var(--color-text-primary)'
					}
				},
				'#lienholderInfoReminder-content-container-BEFORE-2': {
					marginTop: '1.5rem'
				},
				'#offer-container': {
					maxWidth: '1060px',
					margin: '0 auto'
				},
				'.card': {
					padding: '0',
					border: '16px solid var(--color-primary)',
					backgroundColor: 'var(--color-primary)',
					'@media (min-width: 992px)': {
						backgroundImage: 'url("https://s3.amazonaws.com/staging.embed.buddy.insure/allstate/auto/as-echo-vert.svg")',
						backgroundSize: '220px',
						backgroundPosition: 'left bottom',
						backgroundRepeat: 'no-repeat',
						borderRadius: 'unset'
					}
				},
				'.view-container': {
					marginTop: '0',
					marginBottom: '2rem',
					minHeight: '220px'
				},
				'#offer-container > div > div:nth-child(1) > div': {},
				'#lienholderInfoReminder-content-container-BEFORE-0': {
					marginBottom: '1rem'
				},
				'#policy-primaryUseCode-radio-button-wrapper': {
					display: 'block',
					lineHeight: '2'
				},
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true, #policy-tCPAConsent-true, #policy-bindConsent-true, #policy-manuallyEnterPriorAddress-true, #policy-manuallyEnterLienHolderAddress-true), label[for=policy-coverages-deathIndemnityCoverage], label[for=policy-vehicleCoverages-towingAndLabor], label[for=policy-vehicleCoverages-rideForHire]': {
					display: 'none'
				},
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true, #policy-tCPAConsent-true, #policy-bindConsent-true, #policy-manuallyEnterPriorAddress-true, #policy-manuallyEnterLienHolderAddress-true) + label::before': {
					content: "'Configure ⌄'",
					textTransform: 'uppercase',
					backgroundColor: 'var(--color-secondary)',
					padding: '8px 10px',
					borderRadius: '2rem',
					fontSize: '12px',
					'@media (min-width: 768px)': {
						fontSize: '14px'
					}
				},
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true, #policy-tCPAConsent-true, #policy-bindConsent-true, #policy-manuallyEnterPriorAddress-true, #policy-manuallyEnterLienHolderAddress-true):checked + label::before': {
					content: "'Close ✕'"
				},
				'input[type=checkbox]': {
					color: 'white'
				},
				'input[type=checkbox]:checked': {
					color: '#053361'
				},
				'#policy-purchaseDate-field-container': {
					width: '100%',
					'@media (min-width: 768px)': {
						maxWidth: '50%'
					}
				},
				'#policy-vehicleCoverages-autoReplacementProtectionToggle-field-container, #policy-vehicleCoverages-towingAndLaborToggle-field-container, #policy-coverages-bodilyInjuryLiabilityToggle-field-container, #policy-coverages-propertyDamageLiabilityToggle-field-container, #policy-coverages-deathIndemnityCoverageToggle-field-container, #policy-coverages-uninsuredMotoristPropertyDamageToggle-field-container, #policy-coverages-medicalPaymentsToggle-field-container, #policy-coverages-medicalExpensesToggle-field-container, #policy-coverages-uninsuredMotoristToggle-field-container, #policy-coverages-underinsuredMotoristToggle-field-container, #policy-coverages-uninsuredUnderinsuredMotoristToggle-field-container, #policy-coverages-UninsuredUnderinsuredMotoristBodilyInjuryToggle-field-container, #policy-vehicleCoverages-collisionToggle-field-container, #policy-vehicleCoverages-transportationExpenseToggle-field-container, #policy-vehicleCoverages-soundSystemToggle-field-container, #policy-vehicleCoverages-mediaToggle-field-container, #policy-vehicleCoverages-customEquipmentComprehensiveToggle-field-container, #policy-vehicleCoverages-customEquipmentCollisionToggle-field-container, #policy-vehicleCoverages-rideForHireToggle-field-container, #policy-vehicleCoverages-comprehensiveWithGlassToggle-field-container, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle-field-container, #policy-vehicleCoverages-comprehensiveToggle-field-container, #policy-vehicleCoverages-comprehensiveWithGlassToggle-field-container, #policy-vehicleCoverages-excessElectronicEquipmentToggle-field-container, #policy-coverages-uninsuredMotoristBodilyInjuryPlusToggle-field-container, #policy-coverages-uninsuredMotoristPropertyDamagePlusToggle-field-container': {
					border: '2px solid #D3D3D3',
					backgroundImage: "url('https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=')",
					backgroundSize: '120px',
					backgroundPosition: 'left top',
					backgroundRepeat: 'no-repeat',
					borderRadius: '.25rem',
					minHeight: '120px',
					padding: '10px 2px 0 0',
					minWidth: '300px',
					'margin-left': '-15px',
					'@media (min-width: 768px)': {
						minHeight: '110px',
						'margin-left': 'unset'
					}
				},
				'#policy-coverages-bodilyInjuryLiabilityToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/bodily-injury-liability-medical-letter.svg')"
				},
				'#policy-coverages-propertyDamageLiabilityToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/property-damage-liability-fence-car-collision.svg')"
				},
				'#policy-coverages-medicalExpensesToggle-field-container, #policy-coverages-medicalPaymentsToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/medical-expenses-doctor-with-clipboard.svg')"
				},
				'#policy-coverages-deathIndemnityCoverageToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/death-indemnity-document-with-dollar-sign.svg')"
				},
				'#policy-vehicleCoverages-towingAndLaborToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/roadside-coverage-tow-truck-with-car.svg')"
				},
				'#policy-coverages-uninsuredMotoristPropertyDamageToggle-field-container, #policy-coverages-uninsuredMotoristPropertyDamagePlusToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/uninsured-motorist-property-damage-windshield-crack-no-coverage.svg')",
					'@media (max-width: 450px)': {
						height: '100px'
					}
				},
				'#policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/uninsured-motorist-property-damage-windshield-crack-no-coverage.svg')",
					'@media (max-width: 450px)': {
						height: '115px'
					}
				},
				'#policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle-field-container, #policy-coverages-uninsuredMotoristToggle-field-container, #policy-coverages-uninsuredMotoristBodilyInjuryPlusToggle-field-container, #policy-coverages-underinsuredMotoristToggle-field-container, #policy-coverages-uninsuredUnderinsuredMotoristToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/uninsured-motorist-bodily-injury.svg')"
				},
				'#policy-vehicleCoverages-collisionToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/collision-car-backed-into-pole.svg')"
				},
				'#policy-vehicleCoverages-comprehensiveWithGlassToggle-field-container, #policy-vehicleCoverages-comprehensiveToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/comprehensive-windshield-cracked.svg')"
				},
				'#policy-vehicleCoverages-transportationExpenseToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/transportation-expense-rental-keys.svg')"
				},
				'#policy-vehicleCoverages-autoReplacementProtectionToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/auto-replacement-protection-car-with-gift-bow.svg')"
				},
				'#policy-vehicleCoverages-mediaToggle-field-container, #policy-vehicleCoverages-excessElectronicEquipmentToggle-field-container, #policy-vehicleCoverages-soundSystemToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/portable-electronics-media-sound-system.svg')"
				},
				'#policy-vehicleCoverages-customEquipmentComprehensiveToggle-field-container, #policy-vehicleCoverages-customEquipmentCollisionToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/comprehensive-custom-equipment-car-custom-equipment.svg')"
				},
				'#policy-vehicleCoverages-rideForHireToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/ride-for-hire-endorsement-car-with-dollar-sign.svg')",
					height: 'auto',
					'@media (min-width: 768px)': {
						height: '110px'
					}
				},
				'label[for=policy-vehicleCoverages-autoReplacementProtectionToggle], label[for=policy-vehicleCoverages-towingAndLaborToggle], label[for=policy-vehicleCoverages-comprehensiveWithGlassToggle], label[for=policy-coverages-uninsuredMotoristPropertyDamagePlusToggle], label[for=policy-coverages-uninsuredMotoristBodilyInjuryPlusToggle], label[for=policy-vehicleCoverages-soundSystemToggle], label[for=policy-coverages-underinsuredMotoristToggle], label[for=policy-coverages-uninsuredMotoristToggle], label[for=policy-vehicleCoverages-customEquipmentCollisionToggle], label[for=policy-vehicleCoverages-customEquipmentComprehensiveToggle], label[for=policy-vehicleCoverages-excessElectronicEquipmentToggle], label[for=policy-vehicleCoverages-mediaToggle], label[for=policy-vehicleCoverages-transportationExpenseToggle], label[for=policy-vehicleCoverages-comprehensiveToggle], label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle], label[for=policy-coverages-uninsuredMotoristPropertyDamageToggle], label[for=policy-coverages-deathIndemnityCoverageToggle], label[for=policy-coverages-medicalPaymentsToggle], label[for=policy-coverages-medicalExpensesToggle], label[for=policy-coverages-medicalExpensesToggle], label[for=policy-coverages-propertyDamageLiabilityToggle], label[for=policy-vehicleCoverages-collisionToggle], label[for=policy-coverages-bodilyInjuryLiabilityToggle], label[for=policy-vehicleCoverages-rideForHire], label[for=policy-coverages-uninsuredUnderinsuredMotoristToggle], label[for=policy-vehicleCoverages-rideForHireToggle]': {
					marginLeft: '130px'
				},
				'#policy-vehicleCoverages-autoReplacementProtection-radio-button-wrapper, #policy-vehicleCoverages-rideForHire-radio-button-wrapper': {
					display: 'block',
					fontSize: '14px',
					'@media (min-width: 768px)': {
						fontSize: 'unset',
						display: 'flex'
					}
				},
				'#policy-vehicleCoverages-autoReplacementProtection-radio-button-wrapper > div:nth-child(2), #policy-vehicleCoverages-rideForHire-radio-button-wrapper > div:nth-child(2)': {
					display: 'flex',
					marginBottom: '-10px',
					'@media (min-width: 768px)': {
						marginBottom: 'unset'
					}
				},
				'#policy-vehicleCoverages-autoReplacementProtection-radio-button-wrapper > div:nth-child(1), #policy-vehicleCoverages-rideForHire-radio-button-wrapper > div:nth-child(1)': {
					display: 'flex',
					'@media (min-width: 768px)': {
						marginBottom: 'unset'
					}
				},
				'#policy-vehicleCoverages-towingAndLabor-radio-button-wrapper, #policy-vehicleCoverages-rideForHire-radio-button-wrapper. #policy-vehicleCoverages-towingAndLabor-radio-button-wrapper': {
					'@media (min-width: 768px)': {
						display: 'flex',
						marginRight: '1%'
					}
				},
				'#policy-vehicleCoverages-autoReplacementProtectionToggle-checkbox-wrapper, #policy-vehicleCoverages-towingAndLaborToggle-checkbox-wrapper, #policy-coverages-underinsuredMotoristToggle-checkbox-wrapper, #policy-coverages-uninsuredMotoristToggle-checkbox-wrapper, #policy-vehicleCoverages-soundSystemToggle-checkbox-wrapper, #policy-vehicleCoverages-mediaToggle-checkbox-wrapper, #policy-vehicleCoverages-transportationExpenseToggle-checkbox-wrapper, #policy-vehicleCoverages-comprehensiveToggle-checkbox-wrapper, #policy-vehicleCoverages-collisionToggle-checkbox-wrapper, #policy-coverages-deathIndemnityCoverageToggle-checkbox-wrapper, #policy-coverages-medicalExpensesToggle-checkbox-wrapper, #policy-coverages-propertyDamageLiabilityToggle-checkbox-wrapper, #policy-coverages-bodilyInjuryLiabilityToggle-checkbox-wrapper, #policy-coverages-uninsuredMotoristPropertyDamageToggle-checkbox-wrapper, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle-checkbox-wrapper, #policy-vehicleCoverages-customEquipmentComprehensiveToggle-checkbox-wrapper, #policy-vehicleCoverages-customEquipmentCollisionToggle-checkbox-wrapper, #policy-vehicleCoverages-excessElectronicEquipmentToggle-checkbox-wrapper, #policy-vehicleCoverages-comprehensiveWithGlassToggle-checkbox-wrapper, #policy-coverages-uninsuredMotoristBodilyInjuryPlusToggle-checkbox-wrapper, #policy-coverages-uninsuredMotoristPropertyDamagePlusToggle-checkbox-wrapper, #policy-coverages-medicalPaymentsToggle-checkbox-wrapper, #policy-vehicleCoverages-rideForHireToggle-checkbox-wrapper, #policy-coverages-uninsuredUnderinsuredMotoristToggle-checkbox-wrapper': {
					marginRight: '4px',
					justifyContent: 'right'
				},
				'#policy-coverages-bodilyInjuryLiability-radio-button-wrapper, #policy-coverages-propertyDamageLiability-radio-button-wrapper, #policy-coverages-deathIndemnityCoverage-radio-button-wrapper, #policy-coverages-uninsuredMotoristPropertyDamage-radio-button-wrapper, #policy-coverages-medicalPayments-radio-button-wrapper, #policy-coverages-uninsuredMotorist-radio-button-wrapper, #policy-coverages-underinsuredMotorist-radio-button-wrapper, #policy-vehicleCoverages-collision-radio-button-wrapper, #policy-vehicleCoverages-transportationExpense-radio-button-wrapper, #policy-vehicleCoverages-soundSystem-radio-button-wrapper, #policy-vehicleCoverages-media-radio-button-wrapper, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjury-radio-button-wrapper, #policy-vehicleCoverages-comprehensive-radio-button-wrapper, #policy-vehicleCoverages-customEquipmentComprehensive-radio-button-wrapper, #policy-vehicleCoverages-customEquipmentCollision-radio-button-wrapper, #policy-vehicleCoverages-excessElectronicEquipment-radio-button-wrapper, #policy-vehicleCoverages-comprehensiveWithGlass-radio-button-wrapper, #policy-coverages-uninsuredMotoristBodilyInjuryPlus-radio-button-wrapper, #policy-coverages-uninsuredMotoristPropertyDamagePlus-radio-button-wrapper, #policy-coverages-uninsuredUnderinsuredMotorist-radio-button-wrapper': {
					display: 'block',
					marginLeft: '10px'
				},
				'#quoteMockFollowUp-content-container-BEFORE-1, #vehicleCoverageCustomization-content-container-BEFORE-1, #policySummary-content-container-BEFORE-1': {
					display: 'flex',
					justifyContent: 'left'
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-1': {
					minHeight: '50px'
				},
				'#quoteMockFollowUp-content-container-BEFORE-1, #quoteMockFollowUp-content-container-BEFORE-3, #quoteMockFollowUp-content-container-BEFORE-4': {
					width: '100%',
					backgroundColor: '#F2F6F9',
					h2: {
						fontSize: '1.25rem!important',
						padding: '20px',
						paddingTop: '10px',
						paddingBottom: '0px'
					},
					p: {
						marginBottom: '0px!important',
						marginTop: '0px!important',
						padding: '20px',
						paddingTop: '10px',
						paddingBottom: '10px',
						strong: {
							color: 'var(--color-text-primary)'
						}
					}
				},
				'#quoteMockFollowUp-content-container-BEFORE-3': {
					textAlign: 'end'
				},
				'input[type=radio]': {
					appearance: 'none',
					'-webkit-appearance': 'none',
					backgroundColor: '#fff',
					margin: 0,
					font: 'inherit',
					color: 'currentColor',
					display: 'grid',
					placeContent: 'center',
					width: '1.5rem',
					height: '1.5rem',
					backgroundClip: 'content-box',
					border: '1px solid #6b7789',
					borderRadius: '50%'
				},
				'input[type=radio]:before': {
					content: "''",
					width: '1.5rem',
					height: '1.5rem',
					backgroundClip: 'content-box',
					border: '1px solid #6b7789',
					backgroundColor: '#fff',
					transform: 'scale(0)',
					borderRadius: '50%',
					pointerEvents: 'none'
				},
				'input[type=radio]:checked:before': {
					backgroundColor: '#45bce5',
					transform: 'scale(1)',
					border: '.4rem solid var(--color-primary)'
				},
				'input[type=radio]:focus': {
					outline: 'max(2px, 0.15em) solid #45bce5',
					outlineOffset: 'max(2px, 0.15em)'
				},
				'.progress-bar-container': {
					marginTop: '0 !important',
					marginBottom: '2.75rem !important'
				},
				'#policy-priorAddress-state-field-container, #policy-lienHolderAddress-state-field-container, #policy-spouseInfo-firstName-field-container, #customer-firstName-field-container, #customer-address-city-field-container,#policy-lienholderAddress-city-field-container': {
					'@media (min-width: 768px)': {
						width: '49%',
						display: 'inline-grid',
						marginRight: '1%'
					}
				},
				'#policy-priorAddress-zip-field-container, #policy-lienHolderAddress-postalCode-field-container, #customer-lastName-field-container, #policy-spouseInfo-lastName-field-container, #customer-address-state-field-container': {
					'@media (min-width: 768px)': {
						width: '49%',
						display: 'inline-grid',
						marginLeft: '1%'
					}
				},
				'.field-container': {
					marginTop: '1rem!important',
					'@media (min-width: 768px)': {
						marginTop: '2rem!important'
					}
				},
				'.tooltip-text': {
					top: '15px!important',
					marginLeft: '-10vw',
					maxWidth: '60vw',
					backgroundColor: '#ececec',
					color: '#333',
					fontWeight: 'normal',
					padding: '20px',
					'@media (max-width: 660px)': {
						marginLeft: '-30vw',
						maxWidth: '60vw'
					}
				}
			},
			'.required-asterisk': {
				display: 'none'
			},
			'.progress-bar': {
				backgroundColor: 'var(--color-secondary)'
			},
			'.input-text, .input-select': {
				color: '#333',
				borderRadius: 0
			},
			'.input-select:focus, .input-text:focus': {
				outline: '0.15rem solid #45bce5',
				'border-color': '#0e1941'
			},
			'.input-label': {
				color: 'var(--color-primary)',
				accentColor: '#0E1941',
				fontSize: '.875rem',
				fontWeight: '700',
				lineHeight: '1.25rem',
				fontFamily: 'Arial,Helvectica,sans-serif'
			},
			h2: {
				color: 'var(--color-text-primary)!important',
				fontSize: '1.75rem',
				lineHeight: '2.25rem',
				fontFamily: 'Arial,Helvectica,sans-serif',
				'@media (min-width: 768px)': {
					lineHeight: '3rem'
				}
			},
			h3: {
				color: 'var(--color-text-primary)!important',
				fontSize: '1.25rem',
				fontFamily: 'Arial,Helvectica,sans-serif',
				fontWeight: '400!important'
			},
			p: {
				fontSize: '.85rem',
				fontFamily: 'Arial,Helvectica,sans-serif',
				lineHeight: '1.25em!important'
			},
			'.input-error': {
				marginTop: '0rem!important',
				marginBottom: '0rem!important'
			},
			li: {
				fontSize: '.85rem',
				color: 'var(--color-text-primary)!important',
				lineHeight: '1.25rem',
				fontFamily: 'Arial,Helvectica,sans-serif',
				marginLeft: '2rem'
			},
			'.array-items-container': {
				backgroundColor: '#E4EFF9',
				padding: '1rem',
				width: 'fit-content'
			},
			'#policy-violations-array-container, #violationsInfo-view-container > div.array-items-container > div, #violationsInfo-view-container > div.array-items-container > div, .translate-x-0, .array-items-container, .array-item-pill-container, .array-editor-container': {
				transform: 'none!important'
			},
			'#policy-violations-array-container .array-item-pill': {
				width: '100%!important',
				display: 'flex',
				border: 'none',
				backgroundColor: '#E4EFF9',
				'flex-direction': 'row-reverse',
				paddingLeft: '4px'
			},
			'#policy-violations-array-container': {
				'grid-gap': 'unset',
				justifyContent: 'flex-start',
				padding: '0rem',
				'@media (min-width: 992px)': {
					margin: 'auto'
				}
			},
			'.array-item-pill-container': {
				minWidth: '300px!important',
				'@media (min-width: 600px)': {
					minWidth: '400px!important'
				}
			},
			'.array-items-add-button': {
				minWidth: '200px!important'
			},
			'#policy-violations-array-container > button': {
				width: '200px'
			},
			'#policy-violations-array-container .array-item-remove-button svg': {
				visibility: 'hidden'
			},
			'#policy-violations-array-container .array-item-remove-button:before': {
				content: "'Remove'",
				marginBottom: '-0.75rem'
			},
			'#policy-violations-array-container > *': {
				justifyContent: 'space-between',
				'@media (min-width: 992px)': {
					maxWidth: '60%'
				}
			},
			'#policy-violations-array-container .button-primary': {
				backgroundColor: '#45bce5',
				border: 'unset',
				'&:hover': {
					backgroundColor: '#45bce5',
					color: '#fff'
				}
			},
			'#violationsInfo-content-container-LABEL-1 > p': {
				marginTop: '0rem!important',
				marginBottom: '0rem!important',
				paddingRight: '0.75em',
				'@media (max-width: 660px)': {
					maxWidth: '60%'
				}
			},
			body: {
				fontFamily: 'Arial,Helvectica,sans-serif'
			},
			'.button-primary': {
				textTransform: 'lowercase',
				border: '0.25rem solid var(--color-secondary)',
				borderRadius: '5rem !important',
				background: 'var(--color-secondary)',
				padding: '.75rem 1.125rem',
				color: 'var(--color-textPrimary)',
				'&:hover': {
					backgroundColor: '#fff',
					backgroundImage: 'unset',
					color: 'var(--color-secondary)'
				},
				'&:focus': {
					color: 'var(--color-textPrimary)',
					padding: '.625rem 1rem',
					'box-shadow': '0 0 0 6px #45bce5, inset 0 0 0 2px #00c39c',
					border: '0.25rem solid #fff',
					backgroundColor: '#fff'
				},
				'@media (min-width: 768px)': {
					minWidth: 'unset'
				}
			},
			'.button-secondary': {
				border: '1px solid #b9c6d3',
				background: '#f3f6f9',
				color: 'var(--color-text-primary)',
				padding: '.75rem 1.125rem',
				'&:hover': {
					backgroundColor: '#fff!important',
					color: 'var(--color-primary)',
					textDecoration: 'none'
				},
				'&:focus': {
					color: 'var(--color-textPrimary)',
					padding: '.625rem 1rem',
					'box-shadow': '0 0 0 6px #45bce5, inset 0 0 0 2px #00c39c',
					border: '0.25rem solid #fff',
					backgroundColor: '#fff'
				}
			},
			button: {
				textTransform: 'lowercase',
				backgroundColor: '#fff',
				fontWeight: 'bold',
				fontSize: '16px',
				lineHeight: '1',
				padding: '.75rem 1.125rem',
				color: '#999',
				transition: 'background-color .1s ease 0s',
				borderRadius: '5rem'
			},
			'.radio-button-wrapper': {
				marginTop: '10px!important'
			}
		},
		colors: {
			primary: 'rgb(14,25,65)',
			secondary: 'rgb(0,195,156)',
			textPrimary: '#053361',
			backgroundPrimary: '#ffffff',
			backgroundSecondary: '#F2F6F9'
		}
	}
};

const themeAlt = {
	baseTheme: 'base',
	palette: 'base',
	overrides: {
		styles: {
			'#allstate-auto div[case=single-form], #allstate-auto div[case=paginated],': {
				backgroundColor: '#fff',
				padding: '3rem',
				marginLeft: '0',
				'@media (min-width: 992px)': {
					marginLeft: '220px'
				}
			},
			'#allstate-auto': {
				'#offer-view-container': {
					'h2, h3': {
						textAlign: 'center',
						'@media (min-width: 768px)': {
							textAlign: 'left'
						}
					},
					p: {
						marginTop: '2rem',
						fontStyle: 'italic'
					}
				},
				'#policy-accountTypeCode-field-container': {
					marginTop: '-0.25rem'
				},
				'#policy-tCPAConsent-field-container > p.input-error': {
					display: 'none'
				},
				'#covered-view-container, #customerInfo-view-container, #customerInfo-view-container, #customerInfoMore-view-container, #vehicleVin-view-container, #moreAboutYourVehicle-view-container, #vehicleUsage-view-container, #driverHistory-view-container, #residenceInfo-view-container, #insuranceHistory-view-container': {
					padding: '0 4px'
				},
				'.radio-button-option-wrapper': {
					marginTop: '6px',
					marginLeft: '10px',
					'@media (min-width: 768px)': {
						marginTop: '10px'
					}
				},
				'#policy-vehicleCoverages-rideForHire-radio-button-wrapper > .radio-button-option-wrapper': {
					'@media (min-width: 768px)': {
						marginTop: '-4px'
					}
				},
				'#policy-vehicleCoverages-collisionInfo, #policy-vehicleCoverages-comprehensiveInfo, #policy-vehicleCoverages-comprehensiveCoverageRule, #policy-vehicleCoverages-collisionCoverageRule, #policy-lienHolderAddress-lienHolderAddressPostalCodeRule, #policy-lienHolderAddress-lienHolderAddressStateRule, #policy-lienHolderAddress-lienHolderAddressCityRule, #policy-lienHolderAddress-lienHolderAddressLine1Rule, #policy-loanPeriodRule, #policy-companyNameRule, #policy-bindConsentValidationRule, #policy-tCPAConsentValidationRule, #policy-violationsValidationRule, #policy-accountNumberConfirmationRule, #policy-vehicleCoverages-transportationExpenseRule, #policy-vehicleCoverages-autoReplacementProtectionRule, #policy-vehicleCoverages-mediaRule, #policy-vehicleCoverages-excessElectronicEquipmentRule, #policy-vehicleCoverages-customEquipmentComprehensiveRule, #policy-vehicleCoverages-customEquipmentCollisionRule, #policy-coverages-uninsuredMotoristPropertyDamageRule, #policy-vehicleCoverages-coverageForOthers, #policy-vehicleCoverages-autoReplacementProtectionInfo, #policy-coverages-coversYouAndOthers, #policy-vehicleCoverages-coverageForOthersInfo, label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryRule], #policy-coverages-uninsuredMotoristPropertyDamageInfo, #policy-coverages-coversYouAndOthersInfo, #policy-coverages-coverageForOthersInfo, label[for=policy-stateBad], label[for=policy-manuallyEnterAddress]': {
					display: 'none'
				},
				'#policy-bindConsent-field-container > p.input-error': {
					display: 'none'
				},
				'#policy-lienHolderAddress-lienHolderAddressPostalCodeRule-field-container, #policy-lienHolderAddress-lienHolderAddressStateRule-field-container, #policy-lienHolderAddress-lienHolderAddressCityRule-field-container, #policy-lienHolderAddress-lienHolderAddressLine1Rule-field-container, #policy-loanPeriodRule-field-container, #policy-companyNameRule-field-container': {
					marginTop: '0rem!important'
				},
				'#paymentSelection-view-container': {
					display: 'flex',
					flexDirection: 'column',
					h2: {
						marginTop: '1rem',
						fontSize: '2rem',
						textAlign: 'center',
						'@media (min-width: 768px)': {
							fontSize: '2.5rem'
						}
					},
					'h2:first-of-type': {
						lineHeight: '2.25rem',
						'@media (min-width: 768px)': {
							fontSize: '2.5rem'
						}
					},
					'#paymentSelection-content-container-BEFORE-1': {
						textAlign: 'center',
						marginTop: '1rem',
						h2: {
							marginTop: '1rem',
							fontSize: '2.5rem'
						}
					},
					'#paymentSelection-content-container-BEFORE-0': {
						'@media (min-width: 992px)': {
							flexDirection: 'column'
						},
						h2: {
							marginTop: 'unset',
							marginBottom: 'unset',
							color: 'var(--color-text-primary)',
							padding: '0.85rem',
							fontSize: '2.5rem',
							'background-color': 'var(--color-secondary)',
							'border-radius': '2rem',
							minWidth: '190px'
						}
					}
				},
				'#paymentSelection-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-9, #vehicleCoverageCustomization-content-container-AFTER-0': {
					display: 'flex',
					flexDirection: 'column',
					'align-items': 'center',
					'justify-content': 'center',
					'align-content': 'stretch',
					backgroundColor: '#E4EFF9',
					padding: '20px',
					width: 'fit-content',
					margin: '1.5rem auto',
					border: '2px solid #D3D3D3',
					'border-radius': '.25rem',
					'@media (min-width: 992px)': {
						flexDirection: 'row'
					},
					h1: {
						marginLeft: '1rem',
						marginRight: '1rem',
						'margin-bottom': '0.25em',
						padding: '0.85rem',
						fontSize: '2.5rem',
						'background-color': 'var(--color-secondary)',
						color: 'var(--color-text-primary)',
						'border-radius': '2rem'
					},
					'h1::before': {
						content: "'$'",
						fontSize: '1.75rem',
						verticalAlign: 'top'
					},
					'p:first-of-type': {
						'font-weight': 'bold',
						'font-size': '1rem',
						'margin-bottom': '1rem'
					},
					p: {
						'margin-top': '0rem!important',
						'margin-bottom': '0rem!important'
					}
				},
				'#quoteInterstitial-content-container-BEFORE-9 > p:nth-child(2)': {
					'margin-bottom': '.5rem'
				},
				'#quoteMockFollowUp-view-container .input-label span, #vehicleCoverageCustomization-view-container .input-label span': {
					fontWeight: '300'
				},
				'#quoteMockFollowUp-view-container .input-label strong, #vehicleCoverageCustomization-view-container .input-label strong': {
					fontWeight: '700'
				},
				'label[for=policy-manuallyEnterLienHolderAddress], label[for=policy-manuallyEnterPriorAddress], label[for=policy-vehicleCoverages-collisionCoverageRule], label[for=policy-vehicleCoverages-comprehensiveCoverageRule], label[for=policy-lienHolderAddress-lienHolderAddressStateRule], label[for=policy-lienHolderAddress-lienHolderAddressPostalCodeRule], label[for=policy-lienHolderAddress-lienHolderAddressCityRule], label[for=policy-lienHolderAddress-lienHolderAddressLine1Rule], label[for=policy-loanPeriodRule], label[for=policy-companyNameRule], label[for=policy-bindConsentValidationRule], label[for=policy-tCPAConsentValidationRule], label[for=policy-bindConsent], label[for=policy-violationsValidationRule], label[for=policy-accountNumberConfirmationRule], label[for=policy-vehicleCoverages-customEquipmentCollisionRule], label[for=policy-vehicleCoverages-customEquipmentComprehensiveRule], label[for=policy-vehicleCoverages-excessElectronicEquipmentRule], label[for=policy-vehicleCoverages-mediaRule], label[for=policy-vehicleCoverages-autoReplacementProtectionRule], label[for=policy-vehicleCoverages-transportationExpenseRule], label[for=policy-coverages-uninsuredMotoristPropertyDamageRule], label[for=policy-violationsInFiveYears], label[for=policy-coverages-bodilyInjuryLiability], label[for=policy-coverages-propertyDamageLiability], label[for=policy-coverages-medicalExpenses], label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjury], label[for=policy-coverages-uninsuredMotoristPropertyDamage], label[for=policy-vehicleCoverages-customEquipmentCollision], label[for=policy-vehicleCoverages-customEquipmentComprehensive], label[for=policy-vehicleCoverages-customEquipmentComprehensive], label[for=policy-vehicleCoverages-excessElectronicEquipment], label[for=policy-vehicleCoverages-media], label[for=policy-vehicleCoverages-transportationExpense], label[for=policy-vehicleCoverages-comprehensive], label[for=policy-vehicleCoverages-collision], #quote-price-label-container': {
					display: 'none'
				},
				'#violationsInfo-view-container > div.array-items-container > label': {
					display: 'none'
				},
				'#quoteInterstitial-content-container-BEFORE-1 p': {
					fontSize: '1.2rem',
					marginBottom: '.5rem'
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #policySummary-content-container-BEFORE-0': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: '#E4EFF9',
					padding: '20px',
					width: 'fit-content',
					margin: '1.5rem auto',
					border: '2px solid #D3D3D3',
					'border-radius': '.25rem',
					h1: {
						'margin-bottom': '.1em!important',
						'margin-top': '.2em!important',
						color: 'var(--color-text-primary)',
						padding: '0.85rem',
						fontSize: '3.5rem!important',
						'background-color': 'var(--color-secondary)',
						'border-radius': '2rem',
						minWidth: '100px',
						width: 'fit-content',
						minHeight: '80px',
						textAlign: 'center'
					},
					'h1::before': {
						content: "'$'",
						fontSize: '1.75rem',
						verticalAlign: 'top'
					},
					'p:first-of-type': {
						'font-weight': 'bold',
						'font-size': '1rem',
						'margin-top': '.25rem!important'
					},
					p: {
						'margin-top': '1.5rem!important',
						'margin-bottom': '0rem!important'
					},
					'strong::before': {
						content: "'$'",
						fontSize: '1.75rem',
						verticalAlign: 'top'
					},
					strong: {
						color: 'var(--color-text-primary)',
						'background-color': 'var(--color-secondary)',
						'border-radius': '2rem',
						padding: '1.25rem',
						fontSize: '2.5rem',
						display: 'block',
						textAlign: 'center'
					},
					em: {
						display: 'block',
						marginTop: '.2rem',
						textAlign: 'center'
					}
				},
				'label[for=policy-vehicleCoverages-coverageForOthers] > #vehicleCoverageCustomization-content-container-LABEL-DYNOMARK-1 > span:nth-child(1) > strong, label[for=policy-coverages-coverageForOthersInfo] > #quoteMockFollowUp-content-container-LABEL-DYNOMARK-1 span:nth-child(1), label[for=policy-coverages-coversYouAndOthers] > #quoteMockFollowUp-content-container-LABEL-DYNOMARK-1 > span:nth-child(1)': {
					fontWeight: 'bold!important',
					fontSize: '18px',
					display: 'block'
				},
				'#policy-vehicleCoverages-comprehensiveCoverageRule-field-container > p.input-error, #policy-vehicleCoverages-collisionCoverageRule-field-container > p.input-error, #policy-tCPAConsentValidationRule-field-container > p.input-error': {
					marginTop: '-20px!important'
				},
				'#policy-vehicleCoverages-collisionInfo-field-container, #policy-vehicleCoverages-comprehensiveInfo-field-container, #policy-vehicleCoverages-autoReplacementProtectionInfo-field-container, #policy-vehicleCoverages-customEquipmentCollisionInfo-field-container, #policy-vehicleCoverages-customEquipmentComprehensiveInfo-field-container, #policy-vehicleCoverages-excessElectronicEquipmentInfo-field-container, #policy-vehicleCoverages-mediaInfo-field-container, #policy-vehicleCoverages-transportationExpenseInfo-field-container, #policy-coverages-uninsuredMotoristPropertyDamageInfo-field-container, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryInfo-field-container': {
					marginTop: '-10px!important'
				},
				'#quoteMockFollowUp-content-container-LABEL-DYNOMARK-1 > span:nth-child(2) > strong': {
					fontWeight: '400!important'
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-9, #policySummary-content-container-BEFORE-0': {
					h1: {
						'@media (max-width: 990px)': {
							'text-align': 'center',
							'min-height': '48px'
						}
					}
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #policySummary-content-container-BEFORE-0': {
					'@media (min-width: 992px)': {
						position: 'fixed',
						marginLeft: '-260px',
						backgroundColor: '#fff',
						padding: '1.5rem',
						'border-radius': 'unset',
						border: '0px'
					}
				},
				'#policy-violationsInFiveYears-field-container': {
					marginTop: '0rem',
					marginBottom: '2rem'
				},
				table: {
					color: 'var(--color-text-primary)'
				},
				'td strong': {
					marginLeft: 'unset',
					'@media (min-width: 768px)': {
						marginLeft: '-1rem',
						color: 'var(--color-text-primary)'
					}
				},
				td: {
					padding: '.5rem',
					paddingLeft: '1rem',
					'@media (min-width: 768px)': {
						paddingLeft: '1.65rem'
					}
				},
				thead: {
					backgroundColor: 'var(--color-primary)',
					color: '#fff'
				},
				'table > thead > tr > th': {
					backgroundColor: 'var(--color-primary)',
					color: '#fff'
				},
				'#nav-button-container': {
					justifyContent: 'center'
				},
				'#next-button': {
					marginLeft: 'unset',
					'@media (min-width: 768px)': {
						marginLeft: '1rem'
					}
				},
				'#back-button': {
					marginRight: 'unset',
					width: '100%',
					'@media (min-width: 768px)': {
						marginLeft: '1rem',
						width: 'auto'
					}
				},
				'#error-view-content-container-BEFORE-1': {
					marginBottom: '2rem'
				},
				'#paymentSelection-content-container-BEFORE-1, #secondChance-content-container-AFTER-1, #secondChanceState-content-container-AFTER-1': {
					marginTop: '2rem'
				},
				'#paymentSelection-content-container-BEFORE-1 > p > a, #secondChance-content-container-AFTER-1 > p > a, #secondChanceState-content-container-AFTER-1 > p > a, #paymentSelection-content-container-BEFORE-3 > p > a, #error-view-content-container-BEFORE-2 > p > a': {
					textTransform: 'lowercase',
					border: '2px solid var(--color-secondary)',
					borderRadius: '5rem !important',
					background: 'var(--color-secondary)',
					padding: '.5rem .75rem',
					color: 'var(--color-textPrimary)',
					'&:hover': {
						backgroundColor: '#fff',
						color: 'var(--color-secondary)',
						textDecoration: 'none'
					},
					'@media (min-width: 768px)': {
						minWidth: 'unset',
						padding: '.75rem 1.125rem'
					}
				},
				'#policy-vehicleCoverages-transportationExpenseInfo, #policy-vehicleCoverages-excessElectronicEquipmentInfo, #policy-vehicleCoverages-mediaInfo, #policy-vehicleCoverages-customEquipmentComprehensiveInfo, #policy-vehicleCoverages-customEquipmentCollisionInfo, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryInfo, label[for=policy-priorPolicies-startDateExpirationDateStatus], label[for=quoteMockFollowUp-content-container-LABEL-DYNOMARK-1], #policy-priorPolicies-startDateExpirationDateStatus, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryRule': {
					display: 'none'
				},
				'#customerInfo-content-container-BELOW_NAV-0': {
					marginTop: '2rem'
				},
				'label[for=policy-vehicleCoverages-comprehensiveInfo], label[for=policy-vehicleCoverages-collisionInfo], label[for=policy-vehicleCoverages-customEquipmentCollisionInfo], label[for=policy-vehicleCoverages-customEquipmentComprehensiveInfo], label[for=policy-vehicleCoverages-excessElectronicEquipmentInfo], label[for=policy-vehicleCoverages-mediaInfo], label[for=policy-vehicleCoverages-autoReplacementProtectionInfo], label[for=policy-vehicleCoverages-transportationExpenseInfo], label[for=policy-coverages-uninsuredMotoristPropertyDamageInfo], label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryInfo], #vehicleVin-content-container-AFTER-0, #lienholderInfoReminder-content-container-BEFORE-1': {
					marginTop: '1.5rem',
					padding: '.5rem!important',
					backgroundColor: '#F2F6F9',
					fontWeight: 'normal'
				},
				'#vehicleCoverageCustomization-content-container-LABEL-DYNOMARK-1 > span:nth-child(2) > strong': {
					fontWeight: '400!important'
				},
				'label[for=policy-vehicleCoverages-comprehensiveInfo], label[for=policy-vehicleCoverages-collisionInfo], label[for=policy-vehicleCoverages-customEquipmentCollisionInfo], label[for=policy-vehicleCoverages-customEquipmentComprehensiveInfo], label[for=policy-vehicleCoverages-excessElectronicEquipmentInfo], label[for=policy-vehicleCoverages-mediaInfo], label[for=policy-vehicleCoverages-autoReplacementProtectionInfo], label[for=policy-vehicleCoverages-transportationExpenseInfo], label[for=policy-coverages-uninsuredMotoristPropertyDamageInfo], label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryInfo]': {
					padding: '1.25rem!important'
				},
				'#vehicleVin-content-container-AFTER-0 > p': {
					marginLeft: '1.5rem'
				},
				'#lienholderInfoReminder-content-container-BEFORE-2': {
					marginTop: '1.5rem'
				},
				'#offer-container': {
					maxWidth: '1060px',
					margin: '0 auto'
				},
				'.card': {
					padding: '0',
					border: '16px solid var(--color-primary)',
					backgroundColor: 'var(--color-primary)',
					'@media (min-width: 992px)': {
						backgroundImage: 'url("https://s3.amazonaws.com/staging.embed.buddy.insure/allstate/auto/as-echo-vert-purple.svg")',
						backgroundSize: '220px',
						backgroundPosition: 'left bottom',
						backgroundRepeat: 'no-repeat',
						borderRadius: 'unset'
					}
				},
				'.view-container': {
					marginTop: '0',
					marginBottom: '2rem',
					minHeight: '220px'
				},
				'#offer-container > div > div:nth-child(1) > div': {},
				'#lienholderInfoReminder-content-container-BEFORE-0': {
					marginBottom: '1rem'
				},
				'#policy-primaryUseCode-radio-button-wrapper': {
					display: 'block',
					lineHeight: '2'
				},
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true, #policy-tCPAConsent-true, #policy-bindConsent-true, #policy-manuallyEnterPriorAddress-true, #policy-manuallyEnterLienHolderAddress-true)': {
					display: 'none'
				},
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true, #policy-tCPAConsent-true, #policy-bindConsent-true, #policy-manuallyEnterPriorAddress-true, #policy-manuallyEnterLienHolderAddress-true) + label::before': {
					content: "'Configure ⌄'",
					textTransform: 'uppercase',
					backgroundColor: 'var(--color-secondary)',
					padding: '8px 10px',
					borderRadius: '2rem',
					fontSize: '12px',
					'@media (min-width: 768px)': {
						fontSize: '14px'
					}
				},
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true, #policy-tCPAConsent-true, #policy-bindConsent-true, #policy-manuallyEnterPriorAddress-true, #policy-manuallyEnterLienHolderAddress-true):checked + label::before': {
					content: "'Close ✕'"
				},
				'#policy-purchaseDate-field-container': {
					width: '100%',
					'@media (min-width: 768px)': {
						maxWidth: '50%'
					}
				},
				'#policy-coverages-bodilyInjuryLiabilityToggle-field-container, #policy-coverages-propertyDamageLiabilityToggle-field-container, #policy-coverages-deathIndemnityCoverageToggle-field-container, #policy-coverages-uninsuredMotoristPropertyDamageToggle-field-container, #policy-coverages-medicalPaymentsToggle-field-container, #policy-coverages-medicalExpensesToggle-field-container, #policy-coverages-uninsuredMotoristToggle-field-container, #policy-coverages-underinsuredMotoristToggle-field-container, #policy-coverages-uninsuredUnderinsuredMotoristToggle-field-container, #policy-coverages-UninsuredUnderinsuredMotoristBodilyInjuryToggle-field-container, #policy-vehicleCoverages-collisionToggle-field-container, #policy-vehicleCoverages-transportationExpenseToggle-field-container, #policy-vehicleCoverages-towingAndLaborToggle-field-container, #policy-vehicleCoverages-soundSystemToggle-field-container, #policy-vehicleCoverages-mediaToggle-field-container, #policy-vehicleCoverages-customEquipmentComprehensiveToggle-field-container, #policy-vehicleCoverages-customEquipmentCollisionToggle-field-container, #policy-vehicleCoverages-rideForHireToggle-field-container, #policy-vehicleCoverages-comprehensiveWithGlassToggle-field-container, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle-field-container, #policy-vehicleCoverages-comprehensiveToggle-field-container, #policy-vehicleCoverages-comprehensiveWithGlassToggle-field-container, #policy-vehicleCoverages-excessElectronicEquipmentToggle-field-container, #policy-coverages-uninsuredMotoristBodilyInjuryPlusToggle-field-container, #policy-coverages-uninsuredMotoristPropertyDamagePlusToggle-field-container, #policy-vehicleCoverages-towingAndLabor-field-container, #policy-vehicleCoverages-autoReplacementProtection-field-container, #policy-vehicleCoverages-rideForHire-field-container': {
					border: '2px solid #D3D3D3',
					backgroundImage: "url('https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=')",
					backgroundSize: '120px',
					backgroundPosition: 'left top',
					backgroundRepeat: 'no-repeat',
					borderRadius: '.25rem',
					minHeight: '120px',
					padding: '10px 2px 0 0',
					minWidth: '300px',
					'margin-left': '-15px',
					'@media (min-width: 768px)': {
						minHeight: '110px',
						'margin-left': 'unset'
					}
				},
				'#policy-coverages-bodilyInjuryLiabilityToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/bodily-injury-liability-medical-letter.svg')"
				},
				'#policy-coverages-propertyDamageLiabilityToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/property-damage-liability-fence-car-collision.svg')"
				},
				'#policy-coverages-medicalExpensesToggle-field-container, #policy-coverages-medicalPaymentsToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/medical-expenses-doctor-with-clipboard.svg')"
				},
				'#policy-coverages-deathIndemnityCoverageToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/death-indemnity-document-with-dollar-sign.svg')"
				},
				'#policy-coverages-uninsuredMotoristPropertyDamageToggle-field-container, #policy-coverages-uninsuredMotoristPropertyDamagePlusToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/uninsured-motorist-property-damage-windshield-crack-no-coverage.svg')",
					'@media (max-width: 450px)': {
						height: '100px'
					}
				},
				'#policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/uninsured-motorist-property-damage-windshield-crack-no-coverage.svg')",
					'@media (max-width: 450px)': {
						height: '115px'
					}
				},
				'#policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle-field-container, #policy-coverages-uninsuredMotoristToggle-field-container, #policy-coverages-uninsuredMotoristBodilyInjuryPlusToggle-field-container, #policy-coverages-underinsuredMotoristToggle-field-container, #policy-coverages-uninsuredUnderinsuredMotoristToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/uninsured-motorist-bodily-injury.svg')"
				},
				'#policy-vehicleCoverages-collisionToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/collision-car-backed-into-pole.svg')"
				},
				'#policy-vehicleCoverages-comprehensiveWithGlassToggle-field-container, #policy-vehicleCoverages-comprehensiveToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/comprehensive-windshield-cracked.svg')"
				},
				'#policy-vehicleCoverages-transportationExpenseToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/transportation-expense-rental-keys.svg')"
				},
				'#policy-vehicleCoverages-towingAndLabor-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/roadside-coverage-tow-truck-with-car.svg')",
					height: 'auto',
					'@media (min-width: 768px)': {
						height: '110px'
					}
				},
				'#policy-vehicleCoverages-autoReplacementProtection-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/auto-replacement-protection-car-with-gift-bow.svg')"
				},
				'#policy-vehicleCoverages-mediaToggle-field-container, #policy-vehicleCoverages-excessElectronicEquipmentToggle-field-container, #policy-vehicleCoverages-soundSystemToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/portable-electronics-media-sound-system.svg')"
				},
				'#policy-vehicleCoverages-customEquipmentComprehensiveToggle-field-container, #policy-vehicleCoverages-customEquipmentCollisionToggle-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/comprehensive-custom-equipment-car-custom-equipment.svg')"
				},
				'#policy-vehicleCoverages-rideForHire-field-container': {
					backgroundImage: "url('https://staging.embed.buddy.insure/allstate/auto/icons/ride-for-hire-endorsement-car-with-dollar-sign.svg')",
					height: 'auto',
					'@media (min-width: 768px)': {
						height: '110px'
					}
				},
				'label[for=policy-vehicleCoverages-comprehensiveWithGlassToggle], label[for=policy-coverages-uninsuredMotoristPropertyDamagePlusToggle], label[for=policy-coverages-uninsuredMotoristBodilyInjuryPlusToggle], label[for=policy-vehicleCoverages-soundSystemToggle], label[for=policy-coverages-underinsuredMotoristToggle], label[for=policy-coverages-uninsuredMotoristToggle], label[for=policy-vehicleCoverages-customEquipmentCollisionToggle], label[for=policy-vehicleCoverages-customEquipmentComprehensiveToggle], label[for=policy-vehicleCoverages-excessElectronicEquipmentToggle], label[for=policy-vehicleCoverages-mediaToggle], label[for=policy-vehicleCoverages-transportationExpenseToggle], label[for=policy-vehicleCoverages-comprehensiveToggle], label[for=policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle], label[for=policy-coverages-uninsuredMotoristPropertyDamageToggle], label[for=policy-coverages-deathIndemnityCoverageToggle], label[for=policy-coverages-medicalPaymentsToggle], label[for=policy-coverages-medicalExpensesToggle], label[for=policy-coverages-medicalExpensesToggle], label[for=policy-coverages-propertyDamageLiabilityToggle], label[for=policy-vehicleCoverages-collisionToggle], label[for=policy-coverages-bodilyInjuryLiabilityToggle], label[for=policy-vehicleCoverages-towingAndLabor], #policy-vehicleCoverages-towingAndLabor-radio-button-wrapper, label[for=policy-vehicleCoverages-autoReplacementProtection], #policy-vehicleCoverages-autoReplacementProtection-radio-button-wrapper, label[for=policy-vehicleCoverages-rideForHire], #policy-vehicleCoverages-rideForHire-radio-button-wrapper, label[for=policy-coverages-uninsuredUnderinsuredMotoristToggle]': {
					marginLeft: '130px'
				},
				'#policy-vehicleCoverages-towingAndLabor-radio-button-wrapper, #policy-vehicleCoverages-autoReplacementProtection-radio-button-wrapper, #policy-vehicleCoverages-rideForHire-radio-button-wrapper': {
					display: 'block',
					fontSize: '14px',
					'@media (min-width: 768px)': {
						fontSize: 'unset',
						display: 'flex'
					}
				},
				'#policy-vehicleCoverages-towingAndLabor-radio-button-wrapper > div:nth-child(2), #policy-vehicleCoverages-autoReplacementProtection-radio-button-wrapper > div:nth-child(2), #policy-vehicleCoverages-rideForHire-radio-button-wrapper > div:nth-child(2)': {
					display: 'flex',
					marginBottom: '-10px',
					'@media (min-width: 768px)': {
						marginBottom: 'unset'
					}
				},
				'#policy-vehicleCoverages-autoReplacementProtection-radio-button-wrapper > div:nth-child(1), #policy-vehicleCoverages-rideForHire-radio-button-wrapper > div:nth-child(1)': {
					display: 'flex',
					marginTop: '-6px',
					'@media (min-width: 768px)': {
						marginBottom: 'unset'
					}
				},
				'#policy-vehicleCoverages-towingAndLabor-radio-button-wrapper, #policy-vehicleCoverages-rideForHire-radio-button-wrapper. #policy-vehicleCoverages-towingAndLabor-radio-button-wrapper': {
					'@media (min-width: 768px)': {
						display: 'flex',
						marginRight: '1%'
					}
				},
				'#policy-coverages-underinsuredMotoristToggle-checkbox-wrapper, #policy-coverages-uninsuredMotoristToggle-checkbox-wrapper, #policy-vehicleCoverages-soundSystemToggle-checkbox-wrapper, #policy-vehicleCoverages-mediaToggle-checkbox-wrapper, #policy-vehicleCoverages-transportationExpenseToggle-checkbox-wrapper, #policy-vehicleCoverages-comprehensiveToggle-checkbox-wrapper, #policy-vehicleCoverages-collisionToggle-checkbox-wrapper, #policy-coverages-deathIndemnityCoverageToggle-checkbox-wrapper, #policy-coverages-medicalExpensesToggle-checkbox-wrapper, #policy-coverages-propertyDamageLiabilityToggle-checkbox-wrapper, #policy-coverages-bodilyInjuryLiabilityToggle-checkbox-wrapper, #policy-coverages-uninsuredMotoristPropertyDamageToggle-checkbox-wrapper, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjuryToggle-checkbox-wrapper, #policy-vehicleCoverages-customEquipmentComprehensiveToggle-checkbox-wrapper, #policy-vehicleCoverages-customEquipmentCollisionToggle-checkbox-wrapper, #policy-vehicleCoverages-excessElectronicEquipmentToggle-checkbox-wrapper, #policy-vehicleCoverages-comprehensiveWithGlassToggle-checkbox-wrapper, #policy-coverages-uninsuredMotoristBodilyInjuryPlusToggle-checkbox-wrapper, #policy-coverages-uninsuredMotoristPropertyDamagePlusToggle-checkbox-wrapper, #policy-coverages-medicalPaymentsToggle-checkbox-wrapper, #policy-coverages-uninsuredUnderinsuredMotoristToggle-checkbox-wrapper': {
					marginRight: '4px',
					justifyContent: 'right'
				},
				'#policy-coverages-bodilyInjuryLiability-radio-button-wrapper, #policy-coverages-propertyDamageLiability-radio-button-wrapper, #policy-coverages-deathIndemnityCoverage-radio-button-wrapper, #policy-coverages-uninsuredMotoristPropertyDamage-radio-button-wrapper, #policy-coverages-medicalPayments-radio-button-wrapper, #policy-coverages-uninsuredMotorist-radio-button-wrapper, #policy-coverages-underinsuredMotorist-radio-button-wrapper, #policy-vehicleCoverages-collision-radio-button-wrapper, #policy-vehicleCoverages-transportationExpense-radio-button-wrapper, #policy-vehicleCoverages-soundSystem-radio-button-wrapper, #policy-vehicleCoverages-media-radio-button-wrapper, #policy-coverages-uninsuredUnderinsuredMotoristBodilyInjury-radio-button-wrapper, #policy-vehicleCoverages-comprehensive-radio-button-wrapper, #policy-vehicleCoverages-customEquipmentComprehensive-radio-button-wrapper, #policy-vehicleCoverages-customEquipmentCollision-radio-button-wrapper, #policy-vehicleCoverages-excessElectronicEquipment-radio-button-wrapper, #policy-vehicleCoverages-comprehensiveWithGlass-radio-button-wrapper, #policy-coverages-uninsuredMotoristBodilyInjuryPlus-radio-button-wrapper, #policy-coverages-uninsuredMotoristPropertyDamagePlus-radio-button-wrapper, #policy-coverages-uninsuredUnderinsuredMotorist-radio-button-wrapper': {
					display: 'block',
					marginLeft: '10px'
				},
				'#quoteMockFollowUp-content-container-BEFORE-1, #vehicleCoverageCustomization-content-container-BEFORE-1, #policySummary-content-container-BEFORE-1': {
					display: 'flex',
					justifyContent: 'left'
				},
				'#quoteMockFollowUp-content-container-BEFORE-1, #vehicleCoverageCustomization-content-container-BEFORE-1': {
					minHeight: '50px'
				},
				'#quoteMockFollowUp-content-container-BEFORE-1': {
					display: 'inline-block'
				},
				'input[type=radio]': {
					appearance: 'none',
					'-webkit-appearance': 'none',
					backgroundColor: '#fff',
					margin: 0,
					font: 'inherit',
					color: 'currentColor',
					display: 'grid',
					placeContent: 'center',
					width: '1.5rem',
					height: '1.5rem',
					backgroundClip: 'content-box',
					border: '1px solid #6b7789',
					borderRadius: '50%'
				},
				'input[type=radio]:before': {
					content: "''",
					width: '1.5rem',
					height: '1.5rem',
					backgroundClip: 'content-box',
					border: '1px solid #6b7789',
					backgroundColor: '#fff',
					transform: 'scale(0)',
					borderRadius: '50%',
					pointerEvents: 'none'
				},
				'input[type=radio]:checked:before': {
					backgroundColor: '#45bce5',
					transform: 'scale(1)',
					border: '.4rem solid var(--color-primary)'
				},
				'input[type=radio]:focus': {
					outline: 'max(2px, 0.15em) solid #45bce5',
					outlineOffset: 'max(2px, 0.15em)'
				},
				'.progress-bar-container': {
					marginTop: '0 !important',
					marginBottom: '2.75rem !important'
				},
				'#policy-priorAddress-state-field-container, #policy-lienHolderAddress-state-field-container, #policy-spouseInfo-firstName-field-container, #customer-firstName-field-container, #customer-address-city-field-container,#policy-lienholderAddress-city-field-container': {
					'@media (min-width: 768px)': {
						width: '49%',
						display: 'inline-grid',
						marginRight: '1%'
					}
				},
				'#policy-priorAddress-zip-field-container, #policy-lienHolderAddress-postalCode-field-container, #customer-lastName-field-container, #policy-spouseInfo-lastName-field-container, #customer-address-state-field-container': {
					'@media (min-width: 768px)': {
						width: '49%',
						display: 'inline-grid',
						marginLeft: '1%'
					}
				},
				'.field-container': {
					marginTop: '2rem'
				},
				'.tooltip-text': {
					top: '15px!important',
					marginLeft: '-10vw',
					maxWidth: '60vw',
					backgroundColor: '#ececec',
					color: '#333',
					fontWeight: 'normal',
					padding: '20px',
					'@media (max-width: 660px)': {
						marginLeft: '-30vw',
						maxWidth: '60vw'
					}
				},
				'.array-item-pill-container, .array-items-add-button': {
					minWidth: '550px!important'
				}
			},
			'.required-asterisk': {
				display: 'none'
			},
			'.progress-bar': {
				backgroundColor: 'var(--color-secondary)'
			},
			'.input-text, .input-select': {
				color: '#333'
			},
			'.input-label': {
				color: 'var(--color-primary)',
				accentColor: '#0E1941',
				fontSize: '.875rem',
				fontWeight: '700',
				lineHeight: '1.25rem',
				fontFamily: 'Arial,Helvectica,sans-serif'
			},
			h2: {
				color: 'var(--color-text-primary)!important',
				fontSize: '1.75rem',
				lineHeight: '2.25rem',
				fontFamily: 'Arial,Helvectica,sans-serif',
				'@media (min-width: 768px)': {
					lineHeight: '3rem'
				}
			},
			h3: {
				color: 'var(--color-text-primary)!important',
				fontSize: '1.25rem',
				fontFamily: 'Arial,Helvectica,sans-serif',
				fontWeight: '400!important'
			},
			p: {
				fontSize: '.85rem',
				fontFamily: 'Arial,Helvectica,sans-serif',
				lineHeight: '1.25em!important'
			},
			'.input-error': {
				marginTop: '0rem!important',
				marginBottom: '0rem!important'
			},
			li: {
				fontSize: '.85rem',
				color: 'var(--color-text-primary)!important',
				lineHeight: '1.25rem',
				fontFamily: 'Arial,Helvectica,sans-serif',
				marginLeft: '2rem'
			},
			'#policy-violations-array-container, #violationsInfo-view-container > div.array-items-container > div, #violationsInfo-view-container > div.array-items-container > div, .translate-x-0, .array-items-container, .array-item-pill-container, .array-editor-container': {
				transform: 'none!important'
			},
			body: {
				fontFamily: 'Arial,Helvectica,sans-serif'
			},
			'.button-primary': {
				textTransform: 'lowercase',
				border: '2px solid var(--color-secondary)',
				borderRadius: '5rem !important',
				background: 'var(--color-secondary)',
				padding: '.75rem 1.125rem',
				color: 'var(--color-textPrimary)',
				'&:hover': {
					backgroundColor: '#fff',
					color: 'var(--color-secondary)'
				},
				'@media (min-width: 768px)': {
					minWidth: 'unset'
				}
			},
			'.button-secondary': {
				border: '1px solid #b9c6d3',
				background: '#f3f6f9',
				color: 'var(--color-textPrimary)',
				padding: '.75rem 1.125rem',
				'&:hover': {
					backgroundColor: '#fff!important',
					color: 'var(--color-primary)',
					textDecoration: 'none'
				}
			},
			button: {
				textTransform: 'lowercase',
				backgroundColor: '#fff',
				fontWeight: 'bold',
				fontSize: '16px',
				lineHeight: '1',
				padding: '.75rem 1.125rem',
				color: '#999',
				transition: 'background-color .4s ease 0s',
				borderRadius: '5rem'
			},
			'.radio-button-wrapper': {
				marginTop: '10px!important'
			}
		},
		colors: {
			primary: 'rgb(14,25,65)',
			secondary: '#BD70F4',
			textPrimary: '#053361',
			backgroundPrimary: '#ffffff',
			backgroundSecondary: '#F2F6F9'
		}
	}
};

export { themeBase, themeAlt }