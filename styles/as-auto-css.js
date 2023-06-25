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
				'label[for=policy-stateBad], label[for=policy-manuallyEnterAddress]': {
					display: 'none'
				},
				'#bind-success-view-container': {
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
					alignItems: 'center',
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
					'#bind-success-content-container-BEFORE-1': {
						textAlign: 'center',
						marginTop: '1rem',
						h2: {
							marginTop: '1rem',
							fontSize: '2.5rem'
						}
					},
					'#bind-success-content-container-BEFORE-0': {
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
				'#bind-success-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-9, #vehicleCoverageCustomization-content-container-AFTER-0': {
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
				'#quote-price-label-container': {
					display: 'none'
				},
				'#quoteInterstitial-content-container-BEFORE-1 p': {
					fontSize: '1.2rem',
					marginBottom: '.5rem'
				},
				'#lienholderInfo-content-container-BEFORE-0, #vehicleCoverageCustomization-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #policySummary-content-container-BEFORE-0': {
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
						'margin-bottom': '0.25em',
						color: 'var(--color-text-primary)',
						padding: '0.85rem',
						fontSize: '2.5rem',
						'background-color': 'var(--color-secondary)',
						'border-radius': '2rem',
						minWidth: '190px',
						minHeight: '68px'
					},
					'p:first-of-type': {
						'font-weight': 'bold',
						'font-size': '1rem',
						'margin-top': '1rem'
					},
					p: {
						'margin-top': '0rem!important',
						'margin-bottom': '0rem!important'
					}
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-9, #policySummary-content-container-BEFORE-0': {
					h1: {
						'@media (max-width: 990px)': {
							'text-align': 'center',
							'min-height': '48px'
						}
					}
				},
				'#lienholderInfo-content-container-BEFORE-0, #vehicleCoverageCustomization-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #policySummary-content-container-BEFORE-0': {
					'@media (min-width: 992px)': {
						position: 'fixed',
						marginLeft: '-260px',
						backgroundColor: '#fff',
						padding: '1.5rem',
						'border-radius': 'unset',
						border: '0px'
					}
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
				'#bind-success-content-container-BEFORE-2, #error-view-content-container-BEFORE-1': {
					marginBottom: '2rem'
				},
				'#bind-success-content-container-BEFORE-1, #secondChance-content-container-AFTER-1, #secondChanceState-content-container-AFTER-1': {
					marginTop: '2rem'
				},
				'#bind-success-content-container-BEFORE-1 > p > a, #secondChance-content-container-AFTER-1 > p > a, #secondChanceState-content-container-AFTER-1 > p > a, #bind-success-content-container-BEFORE-3 > p > a, #error-view-content-container-BEFORE-2 > p > a': {
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
				'label[for=policy-priorPolicies-startDateExpirationDateStatus], #policy-priorPolicies-startDateExpirationDateStatus': {
					display: 'none'
				},
				'#customerInfo-content-container-BELOW_NAV-0': {
					marginTop: '2rem'
				},
				'#vehicleVin-content-container-AFTER-0, #lienholderInfoReminder-content-container-BEFORE-1': {
					marginTop: '1.5rem',
					padding: '.5rem!important',
					backgroundColor: '#F2F6F9'
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
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true)': {
					display: 'none'
				},
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true) + label::before': {
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
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true):checked + label::before': {
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
					justifyContent: 'right'
				},
				'#quoteMockFollowUp-content-container-BEFORE-1, #vehicleCoverageCustomization-content-container-BEFORE-1': {
					minHeight: '50px'
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
				'#policy-lienHolderAddress-city-field-container, #policy-spouseInfo-firstName-field-container, #policy-spouseInfo-lastName-field-container, #customer-firstName-field-container, #customer-address-city-field-container,#policy-lienholderAddress-city-field-container': {
					'@media (min-width: 768px)': {
						width: '49%',
						display: 'inline-grid',
						marginRight: '1%'
					}
				},
				'#customer-lastName-field-container, #policy-spouseInfo-lastName-field-container, #customer-address-state-field-container': {
					'@media (min-width: 768px)': {
						width: '49%',
						display: 'inline-grid',
						marginLeft: '1%'
					}
				},
				'#policy-lienHolderAddress-state-field-container, #policy-lienholderAddress-state-field-container': {
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
				'label[for=policy-stateBad], label[for=policy-manuallyEnterAddress]': {
					display: 'none'
				},
				'#bind-success-view-container': {
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
					alignItems: 'center',
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
					'#bind-success-content-container-BEFORE-1': {
						textAlign: 'center',
						marginTop: '1rem',
						h2: {
							marginTop: '1rem',
							fontSize: '2.5rem'
						}
					},
					'#bind-success-content-container-BEFORE-0': {
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
				'#bind-success-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-9, #vehicleCoverageCustomization-content-container-AFTER-0': {
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
				'#quote-price-label-container': {
					display: 'none'
				},
				'#quoteInterstitial-content-container-BEFORE-1 p': {
					fontSize: '1.2rem',
					marginBottom: '.5rem'
				},
				'#lienholderInfo-content-container-BEFORE-0, #vehicleCoverageCustomization-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #policySummary-content-container-BEFORE-0': {
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
						'margin-bottom': '0.25em',
						color: 'var(--color-text-primary)',
						padding: '0.85rem',
						fontSize: '2.5rem',
						'background-color': 'var(--color-secondary)',
						'border-radius': '2rem',
						minWidth: '190px',
						minHeight: '68px'
					},
					'p:first-of-type': {
						'font-weight': 'bold',
						'font-size': '1rem',
						'margin-top': '1rem'
					},
					p: {
						'margin-top': '0rem!important',
						'margin-bottom': '0rem!important'
					}
				},
				'#vehicleCoverageCustomization-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-9, #policySummary-content-container-BEFORE-0': {
					h1: {
						'@media (max-width: 990px)': {
							'text-align': 'center',
							'min-height': '48px'
						}
					}
				},
				'#lienholderInfo-content-container-BEFORE-0, #vehicleCoverageCustomization-content-container-BEFORE-0, #quoteMockFollowUp-content-container-BEFORE-0, #quoteInterstitial-content-container-BEFORE-0, #policySummary-content-container-BEFORE-0': {
					'@media (min-width: 992px)': {
						position: 'fixed',
						marginLeft: '-260px',
						backgroundColor: '#fff',
						padding: '1.5rem',
						'border-radius': 'unset',
						border: '0px'
					}
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
				'#bind-success-content-container-BEFORE-2, #error-view-content-container-BEFORE-1': {
					marginBottom: '2rem'
				},
				'#bind-success-content-container-BEFORE-1, #secondChance-content-container-AFTER-1, #secondChanceState-content-container-AFTER-1': {
					marginTop: '2rem'
				},
				'#bind-success-content-container-BEFORE-1 > p > a, #secondChance-content-container-AFTER-1 > p > a, #secondChanceState-content-container-AFTER-1 > p > a, #bind-success-content-container-BEFORE-3 > p > a, #error-view-content-container-BEFORE-2 > p > a': {
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
				'label[for=policy-priorPolicies-startDateExpirationDateStatus], #policy-priorPolicies-startDateExpirationDateStatus': {
					display: 'none'
				},
				'#customerInfo-content-container-BELOW_NAV-0': {
					marginTop: '2rem'
				},
				'#vehicleVin-content-container-AFTER-0, #lienholderInfoReminder-content-container-BEFORE-1': {
					marginTop: '1.5rem',
					padding: '.5rem!important',
					backgroundColor: '#F2F6F9'
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
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true)': {
					display: 'none'
				},
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true) + label::before': {
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
				'input[type=checkbox]:not(#policy-manuallyEnterAddress-true):checked + label::before': {
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
					justifyContent: 'right'
				},
				'#quoteMockFollowUp-content-container-BEFORE-1, #vehicleCoverageCustomization-content-container-BEFORE-1': {
					minHeight: '50px'
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
				'#policy-lienHolderAddress-city-field-container, #policy-spouseInfo-firstName-field-container, #policy-spouseInfo-lastName-field-container, #customer-firstName-field-container, #customer-address-city-field-container,#policy-lienholderAddress-city-field-container': {
					'@media (min-width: 768px)': {
						width: '49%',
						display: 'inline-grid',
						marginRight: '1%'
					}
				},
				'#customer-lastName-field-container, #policy-spouseInfo-lastName-field-container, #customer-address-state-field-container': {
					'@media (min-width: 768px)': {
						width: '49%',
						display: 'inline-grid',
						marginLeft: '1%'
					}
				},
				'#policy-lienHolderAddress-state-field-container, #policy-lienholderAddress-state-field-container': {
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