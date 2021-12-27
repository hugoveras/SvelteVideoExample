<script>
  // core components
  import TableDropdown from "components/Dropdowns/TableDropdown.svelte";
  import Pagination from '@fouita/pagination'
  import { paginate, LightPaginationNav } from 'svelte-paginate'
    let current =1
    let num_items=30
    let per_page=3

  const bootstrap = "../assets/img/bootstrap.jpg";
  const angular = "../assets/img/angular.jpg";
  const sketch = "../assets/img/sketch.jpg";
  const react = "../assets/img/react.jpg";
  const vue = "../assets/img/react.jpg";

  const team1 = "../assets/img/team-1-800x800.jpg";
  const team2 = "../assets/img/team-2-800x800.jpg";
  const team3 = "../assets/img/team-3-800x800.jpg";
  const team4 = "../assets/img/team-4-470x470.png";


  let columns = ["Select", "Invoice Number", "Invoice Date",  "Invoice Amount",  "Supplier Name", "Originator Name"]
	let data =[{
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "",
		"ApproverName": "",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-03-31T21:21:58.522Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 0,
		"InvoiceDate": "2021-03-31T21:21:58.522Z",
		"InvoiceId": "2385",
		"InvoiceNumber": "",
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-03-31T21:21:59.525Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 0,
		"OrganizationId": 0,
		"OriginatorEmail": "",
		"OriginatorEmplNum": "",
		"OriginatorName": "",
		"OriginatorPhone": "",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-03-31T21:21:58.522Z",
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "SAVED",
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"TaxProcess": {},
		"Taxes": [],
		"TotalDeductionAmount": 0,
		"TotalTaxAmount": 0,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6064e7f80694a2ffdfcf0575"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "",
		"ApproverName": "",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-01T14:57:34.811Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 5,
			"Value": 2.96
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 56.22,
		"InvoiceDate": "2021-04-01T14:57:34.811Z",
		"InvoiceId": "2394",
		"InvoiceNumber": "inv-0401-001",
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-01T15:27:34.302Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 3,
		"OrganizationId": 0,
		"OriginatorEmail": "mfermin@icgteam.com",
		"OriginatorEmplNum": "6063708f796648d7be881d9c",
		"OriginatorName": "trimacadminN  trimacadminL",
		"OriginatorPhone": "",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-01T14:57:34.811Z",
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Submitted",
		"SubTotalAmount": 59.18,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"TaxProcess": {},
		"Taxes": [{
			"Percent": 0,
			"TaxLabel": "GST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "HST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "PST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "QST",
			"Value": 0
		}],
		"TotalDeductionAmount": 2.96,
		"TotalTaxAmount": 0,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6065df600694a2ffdfcf1053"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "",
		"ApproverName": "",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-01T15:05:36.464Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 0,
			"Value": 0
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 584,
		"InvoiceDate": "2021-04-01T15:05:36.464Z",
		"InvoiceId": "2395",
		"InvoiceNumber": "YGTest0104",
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-01T15:12:20.005Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 2,
		"OrganizationId": 0,
		"OriginatorEmail": "gbarrington@trimac.com",
		"OriginatorEmplNum": "60636721991a5b185414b76d",
		"OriginatorName": "Glen Barrington",
		"OriginatorPhone": "",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-01T15:05:36.464Z",
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Submitted",
		"SubTotalAmount": 584,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"TaxProcess": {},
		"Taxes": [{
			"Percent": 0,
			"TaxLabel": "GST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "HST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "PST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "QST",
			"Value": 0
		}],
		"TotalDeductionAmount": 0,
		"TotalTaxAmount": 0,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6065e141e1f05515525b770f"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "151",
		"ApproverName": "Kevin C Decelles",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-01T15:10:55.008Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 0,
			"Value": 0
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 584,
		"InvoiceDate": "2021-04-01T15:10:55.008Z",
		"InvoiceId": "2396",
		"InvoiceNumber": "inv-fromPO0065",
		"Items": [{
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111010"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00030"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00010"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": null,
			"DisabledDiscount": true,
			"DisabledTax": true,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 584,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 584,
			"IsSplit": "",
			"ItemName": "IT-001",
			"LineItemID": 1,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "6065dffcc0ccecbd40d920e2",
			"PurchaseOrderNumber": "PO-2021-000065",
			"Quantity": 10,
			"SplitLine": 0,
			"SubTotal": 584,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 0,
			"UnitPrice": 58.4,
			"UnitTypeDescription": "Day",
			"UnitTypeId": 3
		}],
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-01T15:13:45.155Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 1,
		"OrganizationId": 0,
		"OriginatorEmail": "kdecelles@trimac.com",
		"OriginatorEmplNum": "60636721991a5b185414b773",
		"OriginatorName": "Kevin C Decelles",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-01T15:10:55.008Z",
		"Site": {
			"AddressLine1": "9319 - 81 AVENUE",
			"BusinessAssociatesId": "",
			"City": "FORT ST. JOHN",
			"CountryCode": "CA",
			"Email": "",
			"Fax": "",
			"Fax2": "",
			"Phone": "",
			"PhoneExtension": "",
			"PostalCode": "V1J 6P6",
			"ProvinceCode": "",
			"ShortName": "GENERIC TOWING",
			"SiteId": "6064dea129921a9558e3e0e8"
		},
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Submitted",
		"SubTotalAmount": 584,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"Taxes": [{
			"Percent": 0,
			"TaxLabel": "GST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "HST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "PST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "QST",
			"Value": 0
		}],
		"TotalDeductionAmount": 0,
		"TotalTaxAmount": 0,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6065e2810694a2ffdfcf10de"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "2026",
		"ApproverName": "Douglas J Gatecliff",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-01T15:45:04.585Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 0,
			"Value": 0
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 1343.2,
		"InvoiceDate": "2021-04-01T15:45:04.585Z",
		"InvoiceId": "2398",
		"InvoiceNumber": "Convert to PO invoice #1",
		"Items": [{
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111010"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00030"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00010"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"Comments": "Please deliver ASAP",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": "2021-04-21T04:00:00.000Z",
			"DeliveryLocation": "Kenly, NC",
			"DisabledDiscount": true,
			"DisabledTax": true,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 1343.2,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 1343.2,
			"IsSplit": "",
			"ItemName": "IT-001",
			"LineItemID": 1,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "6065e868f08074ffb1a21d06",
			"PurchaseOrderNumber": "PO-2021-000071",
			"Quantity": 23,
			"SplitLine": 0,
			"SubTotal": 1343.2,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 0,
			"UnitPrice": 58.4,
			"UnitTypeDescription": "Day",
			"UnitTypeId": 3
		}],
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-01T15:50:26.008Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 1,
		"OrganizationId": 0,
		"OriginatorName": "Douglas J Gatecliff",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-01T15:45:04.585Z",
		"Site": {
			"AddressLine1": "9319 - 81 AVENUE",
			"BusinessAssociatesId": "",
			"City": "FORT ST. JOHN",
			"CountryCode": "CA",
			"Email": "",
			"Fax": "",
			"Fax2": "",
			"Phone": "",
			"PhoneExtension": "",
			"PostalCode": "V1J 6P6",
			"ProvinceCode": "",
			"ShortName": "GENERIC TOWING",
			"SiteId": "6064dea129921a9558e3e0e8"
		},
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Errors Found",
		"SubTotalAmount": 1343.2,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"Taxes": [{
			"Percent": 0,
			"TaxLabel": "GST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "HST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "PST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "QST",
			"Value": 0
		}],
		"TotalDeductionAmount": 0,
		"TotalTaxAmount": 0,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6065ea830694a2ffdfcf1369"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "emptrimacadmin",
		"ApproverName": "trimacadminN  trimacadminL",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "confirm",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-01T15:49:57.949Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 2,
			"Value": 157.62
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 8109.79,
		"InvoiceDate": "2021-04-01T15:49:57.949Z",
		"InvoiceId": "2399",
		"InvoiceNumber": "inv-0401-003",
		"Items": [{
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111010"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00030"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00010"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 2,
				"Value": 11.62
			}],
			"DeliveryDate": null,
			"DisabledDiscount": false,
			"DisabledTax": false,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 598.09,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 581.23,
			"IsSplit": "",
			"ItemName": "Manual product inv-003",
			"LineItemID": 1,
			"LineNumSubfix": 0,
			"ProductId": "6061e63e51a2c40e0736dbf0",
			"PurchaseOrderDocumentId": "6065e93ef08074ffb1a21d51",
			"PurchaseOrderNumber": "PO-2021-000073",
			"Quantity": 55,
			"SplitLine": 0,
			"SubTotal": 581.23,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 5,
				"TaxLabel": "GST",
				"Value": 28.48
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 11.62,
			"TotalPercentageDiscount": 2,
			"TotalTax": 28.48,
			"UnitPrice": 10.5678,
			"UnitTypeDescription": "Tube",
			"UnitTypeId": 7
		}, {
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111010"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00030"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00010"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 2,
				"Value": 146
			}],
			"DeliveryDate": null,
			"DisabledDiscount": false,
			"DisabledTax": false,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 7511.7,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 7300,
			"IsSplit": "",
			"ItemName": "IT-002",
			"LineItemID": 2,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "6065e93ef08074ffb1a21d51",
			"PurchaseOrderNumber": "PO-2021-000073",
			"Quantity": 100,
			"SplitLine": 0,
			"SubTotal": 7300,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 5,
				"TaxLabel": "GST",
				"Value": 357.7
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 146,
			"TotalPercentageDiscount": 2,
			"TotalTax": 357.7,
			"UnitPrice": 73,
			"UnitTypeDescription": "Each",
			"UnitTypeId": 41
		}],
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-01T15:51:56.177Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 2,
		"OrganizationId": 0,
		"OriginatorEmail": "mfermin@icgteam.com",
		"OriginatorEmplNum": "6063708f796648d7be881d9c",
		"OriginatorName": "trimacadminN  trimacadminL",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-01T15:49:57.949Z",
		"Site": {
			"AddressLine1": "9319 - 81 AVENUE",
			"BusinessAssociatesId": "",
			"City": "FORT ST. JOHN",
			"CountryCode": "CA",
			"Email": "",
			"Fax": "",
			"Fax2": "",
			"Phone": "",
			"PhoneExtension": "",
			"PostalCode": "V1J 6P6",
			"ProvinceCode": "",
			"ShortName": "GENERIC TOWING",
			"SiteId": "6064dea129921a9558e3e0e8"
		},
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Submitted",
		"SubTotalAmount": 7881.23,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"Taxes": [{
			"Percent": 5,
			"TaxLabel": "GST",
			"Value": 386.18
		}, {
			"Percent": 0,
			"TaxLabel": "HST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "PST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "QST",
			"Value": 0
		}],
		"TotalDeductionAmount": 157.62,
		"TotalTaxAmount": 386.18,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6065eba70694a2ffdfcf1408"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "31934",
		"ApproverName": "Mandy Rahal",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-01T16:05:49.304Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 0,
			"Value": 0
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 13928.4,
		"InvoiceDate": "2021-04-01T16:05:49.304Z",
		"InvoiceId": "2401",
		"InvoiceNumber": "Invoice ajc 6-040121",
		"Items": [{
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111010"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00030"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00010"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": null,
			"DisabledDiscount": true,
			"DisabledTax": false,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 6190.4,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 5840,
			"IsSplit": "",
			"ItemName": "IT-001",
			"LineItemID": 1,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "6065eec2f08074ffb1a21e6c",
			"PurchaseOrderNumber": "PO-2021-000075",
			"Quantity": 100,
			"SplitLine": 0,
			"SubTotal": 5840,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 6,
				"TaxLabel": "GST",
				"Value": 350.4
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 350.4,
			"UnitPrice": 58.4,
			"UnitTypeDescription": "Day",
			"UnitTypeId": 3
		}, {
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111010"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00030"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00010"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": null,
			"DisabledDiscount": true,
			"DisabledTax": false,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 7738,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 7300,
			"IsSplit": "",
			"ItemName": "IT-002",
			"LineItemID": 2,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "6065eec2f08074ffb1a21e6c",
			"PurchaseOrderNumber": "PO-2021-000075",
			"Quantity": 100,
			"SplitLine": 0,
			"SubTotal": 7300,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 6,
				"TaxLabel": "GST",
				"Value": 438
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 438,
			"UnitPrice": 73,
			"UnitTypeDescription": "Each",
			"UnitTypeId": 41
		}],
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-01T16:06:39.822Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 2,
		"OrganizationId": 0,
		"OriginatorEmail": "mrahal@trimac.com",
		"OriginatorEmplNum": "60636722991a5b185414c15d",
		"OriginatorName": "Mandy Rahal",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-01T16:05:49.304Z",
		"Site": {
			"AddressLine1": "9319 - 81 AVENUE",
			"BusinessAssociatesId": "",
			"City": "FORT ST. JOHN",
			"CountryCode": "CA",
			"Email": "",
			"Fax": "",
			"Fax2": "",
			"Phone": "",
			"PhoneExtension": "",
			"PostalCode": "V1J 6P6",
			"ProvinceCode": "",
			"ShortName": "GENERIC TOWING",
			"SiteId": "6064dea129921a9558e3e0e8"
		},
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Submitted",
		"SubTotalAmount": 13140,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"Taxes": [{
			"Percent": 6,
			"TaxLabel": "GST",
			"Value": 788.4
		}, {
			"Percent": 0,
			"TaxLabel": "HST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "PST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "QST",
			"Value": 0
		}],
		"TotalDeductionAmount": 0,
		"TotalTaxAmount": 788.4,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6065ef5e0694a2ffdfcf15fd"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "2026",
		"ApproverName": "Douglas J Gatecliff",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-01T16:26:49.013Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 0,
			"Value": 0
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 2025,
		"InvoiceDate": "2021-04-01T16:26:49.013Z",
		"InvoiceId": "2402",
		"InvoiceNumber": "convert po to invoice #3",
		"Items": [{
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111010"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00030"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00010"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"Comments": "test comments",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": "2021-09-22T04:00:00.000Z",
			"DeliveryLocation": "delivery location x",
			"DisabledDiscount": true,
			"DisabledTax": true,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 2025,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 2025,
			"IsSplit": "",
			"ItemName": "IT-004",
			"LineItemID": 1,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "6065f04bf08074ffb1a21ea7",
			"PurchaseOrderNumber": "PO-2021-000076",
			"Quantity": 45,
			"SplitLine": 0,
			"SubTotal": 2025,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 0,
			"UnitPrice": 45,
			"UnitTypeDescription": "Each",
			"UnitTypeId": 41
		}],
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-01T16:28:53.925Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 1,
		"OrganizationId": 0,
		"OriginatorEmail": "dgatecliff@trimac.com",
		"OriginatorEmplNum": "60636721991a5b185414b7ff",
		"OriginatorName": "Douglas J Gatecliff",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-01T16:26:49.013Z",
		"Site": {
			"AddressLine1": "9319 - 81 AVENUE",
			"BusinessAssociatesId": "",
			"City": "FORT ST. JOHN",
			"CountryCode": "CA",
			"Email": "",
			"Fax": "",
			"Fax2": "",
			"Phone": "",
			"PhoneExtension": "",
			"PostalCode": "V1J 6P6",
			"ProvinceCode": "",
			"ShortName": "GENERIC TOWING",
			"SiteId": "6064dea129921a9558e3e0e8"
		},
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Submitted",
		"SubTotalAmount": 2025,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"Taxes": [{
			"Percent": 0,
			"TaxLabel": "GST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "HST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "PST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "QST",
			"Value": 0
		}],
		"TotalDeductionAmount": 0,
		"TotalTaxAmount": 0,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6065f4520694a2ffdfcf169f"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "2026",
		"ApproverName": "Douglas J Gatecliff",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-01T16:56:16.257Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 0,
			"Value": 0
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 2590,
		"InvoiceDate": "2021-04-01T16:56:16.257Z",
		"InvoiceId": "2403",
		"InvoiceNumber": "GTYG00405-001",
		"Items": [{
			"CategoryDescription": "",
			"CategoryId": "",
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "151120"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00080"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00050"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"Comments": "",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": "2021-10-06T04:00:00.000Z",
			"DeliveryLocation": "",
			"DisabledDiscount": true,
			"DisabledTax": true,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 2520,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 2520,
			"IsSplit": "",
			"ItemName": "IT-004",
			"LineItemID": 1,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "6065e351f08074ffb1a21c5f",
			"PurchaseOrderNumber": "PO-2021-000067",
			"Quantity": 56,
			"SplitLine": "N",
			"SubTotal": 2520,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 0,
			"UnitPrice": 45,
			"UnitTypeDescription": "Each",
			"UnitTypeId": 41
		}, {
			"CategoryDescription": "",
			"CategoryId": "",
			"Coding": [{
				"FieldLabel": "MainAccount",
				"FieldName": "MainAccount",
				"Order": 0,
				"Value": "111010"
			}, {
				"FieldLabel": "BusinessUnit",
				"FieldName": "BusinessUnit",
				"Order": 0,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 0,
				"Value": "C00030"
			}, {
				"FieldLabel": "ProductCode",
				"FieldName": "ProductCode",
				"Order": 0,
				"Value": "A00030"
			}, {
				"FieldLabel": "Taxable",
				"FieldName": "Taxable",
				"Order": 0,
				"Value": "No"
			}],
			"CodingType": "A",
			"Comments": "",
			"ContractDocumentId": "606b335c2923607fc118acc5",
			"ContractNumber": "CON-2021-000007",
			"ContractProductCatalogReferenceId": "606b3bb92923607fc118ad48",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": null,
			"DeliveryLocation": "",
			"DisabledDiscount": true,
			"DisabledTax": true,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 20,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 20,
			"IsSplit": "",
			"ItemName": "Test Upload 5",
			"LineItemID": 2,
			"LineNumSubfix": 0,
			"ProductId": "606b3bb92923607fc118ad45",
			"PurchaseOrderDocumentId": "",
			"Quantity": 2,
			"SplitLine": "N",
			"SubTotal": 20,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 0,
			"UnitPrice": 10,
			"UnitTypeDescription": "Hour",
			"UnitTypeId": 44
		}, {
			"CategoryDescription": "",
			"CategoryId": "",
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111012"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00070"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00050"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "A",
			"ContractDocumentId": "606b335c2923607fc118acc5",
			"ContractNumber": "CON-2021-000007",
			"ContractProductCatalogReferenceId": "606b3bb92923607fc118ad48",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": null,
			"DisabledDiscount": false,
			"DisabledTax": false,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 50,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 50,
			"IsSplit": "",
			"ItemName": "Test Upload 5",
			"LineItemID": 3,
			"LineNumSubfix": 0,
			"ProductId": "606b3bb92923607fc118ad45",
			"PurchaseOrderDocumentId": "",
			"PurchaseOrderNumber": "",
			"Quantity": 5,
			"SplitLine": "N",
			"SubTotal": 50,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 0,
			"UnitPrice": 10,
			"UnitTypeDescription": "Hour",
			"UnitTypeId": 44
		}],
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-05T16:49:11.179Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 3,
		"OrganizationId": 0,
		"OriginatorEmail": "dgatecliff@trimac.com",
		"OriginatorEmplNum": "60636721991a5b185414b7ff",
		"OriginatorName": "Douglas J Gatecliff",
		"OriginatorPhone": "519-344-1296",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-01T16:56:16.257Z",
		"Site": {
			"AddressLine1": "9319 - 81 AVENUE",
			"BusinessAssociatesId": "",
			"City": "FORT ST. JOHN",
			"CountryCode": "CA",
			"Email": "",
			"Fax": "",
			"Fax2": "",
			"Phone": "",
			"PhoneExtension": "",
			"PostalCode": "V1J 6P6",
			"ProvinceCode": "",
			"ShortName": "GENERIC TOWING",
			"SiteId": "6064dea129921a9558e3e0e8"
		},
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Submitted",
		"SubTotalAmount": 2590,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"Taxes": [{
			"Percent": 0,
			"TaxLabel": "GST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "HST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "PST",
			"Value": 0
		}, {
			"Percent": 0,
			"TaxLabel": "QST",
			"Value": 0
		}],
		"TotalDeductionAmount": 0,
		"TotalTaxAmount": 0,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "6065fb3d0694a2ffdfcf1728"
	}, {
		"AccPerDate": "",
		"ApprovalDate": "",
		"ApproverEmpNum": "",
		"ApproverName": "",
		"BA_EMAIL_ACCOUNT": "",
		"BA_EMAIL_Phone1": "",
		"BA_EMAIL_USER_NAME": "GENERIC TOWING",
		"BaName": "GENERIC TOWING",
		"BusinessAssociateId": "100786",
		"Comments": "",
		"CorporateDivisionDocumentId": "",
		"CorporateDivisionShortName": "TRCA",
		"CreateProgramId": "Alto Exchange",
		"CreateTimestamp": "2021-04-06T18:10:19.749Z",
		"CreateUserId": "GENERICTOWING",
		"CreditDays": 0,
		"CurrencyCD": "CAD",
		"CustomerId": "9090",
		"CustomerName": "Trimac",
		"Deductions": [{
			"Label": "Discount",
			"Max": 100,
			"Percent": 0,
			"Value": 0
		}],
		"DiscountDueDate": "",
		"DocumentType": "INV",
		"DueDate": "",
		"DunsNumber": "9090",
		"InvoiceAmount": 861.4,
		"InvoiceDate": "2021-04-06T18:10:19.749Z",
		"InvoiceId": "2412",
		"InvoiceNumber": "NVYG0406-001",
		"Items": [{
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111016"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1039"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C01580"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00090"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "",
			"Comments": "",
			"ContractDocumentId": "",
			"ContractNumber": "",
			"ContractProductCatalogReferenceId": "",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": null,
			"DeliveryLocation": "",
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 350.4,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 350.4,
			"IsSplit": "Y",
			"ItemName": "IT-001",
			"LineItemID": 1,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "",
			"PurchaseOrderNumber": "",
			"Quantity": 6,
			"SubTotal": 350.4,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 0,
			"UnitPrice": 58.4,
			"UnitTypeDescription": "Day"
		}, {
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111011"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00070"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00040"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"ContractDocumentId": "",
			"ContractNumber": "",
			"ContractProductCatalogReferenceId": "",
			"CreateTimeStamp": "",
			"CreateUserID": "",
			"CurrencyCD": "",
			"DUNS_Number": "",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Percent": 0,
				"Value": 0
			}],
			"DiscountPercentage": 0,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 175.2,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 175.2,
			"InvoiceDate": "",
			"InvoiceID": 0,
			"IsSplit": "Y",
			"ItemName": "",
			"LastUpdateProgramID": "",
			"LineItemID": 1,
			"LineNumSubfix": 1,
			"LineTotal": 175.2,
			"ProductId": "",
			"PurchaseOrderDocumentId": "",
			"PurchaseOrderId": "",
			"PurchaseOrderNumber": "",
			"Quantity": 0,
			"SRC_SYS_InvoiceID": "",
			"SourceSystemID": "",
			"SplitPercentage": 50,
			"SubTotal": 175.2,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalTax": 0,
			"UnitPrice": 0,
			"UnitTypeDescription": ""
		}, {
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111012"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1031"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C00070"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00060"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"ContractDocumentId": "",
			"ContractNumber": "",
			"ContractProductCatalogReferenceId": "",
			"CreateTimeStamp": "",
			"CreateUserID": "",
			"CurrencyCD": "",
			"DUNS_Number": "",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Percent": 0,
				"Value": 0
			}],
			"DiscountPercentage": 0,
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 175.2,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 175.2,
			"InvoiceDate": "",
			"InvoiceID": 0,
			"IsSplit": "Y",
			"ItemName": "",
			"LastUpdateProgramID": "",
			"LineItemID": 1,
			"LineNumSubfix": 2,
			"LineTotal": 175.2,
			"ProductId": "",
			"PurchaseOrderDocumentId": "",
			"PurchaseOrderId": "",
			"PurchaseOrderNumber": "",
			"Quantity": 0,
			"SRC_SYS_InvoiceID": "",
			"SourceSystemID": "",
			"SplitPercentage": 50,
			"SubTotal": 175.2,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalTax": 0,
			"UnitPrice": 0,
			"UnitTypeDescription": ""
		}, {
			"Coding": [{
				"FieldLabel": "Main Account",
				"FieldName": "MainAccount",
				"Order": 1,
				"Value": "111016"
			}, {
				"FieldLabel": "Business Unit",
				"FieldName": "BusinessUnit",
				"Order": 2,
				"Value": "1039"
			}, {
				"FieldLabel": "Branch",
				"FieldName": "Branch",
				"Order": 3,
				"Value": "C01580"
			}, {
				"FieldLabel": "Product Code",
				"FieldName": "ProductCode",
				"Order": 4,
				"Value": "A00090"
			}, {
				"FieldLabel": "Legal Entity",
				"FieldName": "LegalEntityReturn",
				"Order": 5,
				"Value": "TRCA"
			}],
			"CodingType": "",
			"Comments": "",
			"ContractDocumentId": "",
			"ContractNumber": "",
			"ContractProductCatalogReferenceId": "",
			"CurrencyCD": "CAD",
			"Deductions": [{
				"EditFlag": "N",
				"Label": "Discount",
				"Max": 100,
				"Percent": 0,
				"Value": 0
			}],
			"DeliveryDate": null,
			"DeliveryLocation": "",
			"EditDiscount": false,
			"EditTax": false,
			"ExtendedAmount": 511,
			"FieldTicketDocumentId": "",
			"FieldTicketNumber": "",
			"GrossAmount": 511,
			"IsSplit": "",
			"ItemName": "IT-002",
			"LineItemID": 2,
			"LineNumSubfix": 0,
			"ProductId": "",
			"PurchaseOrderDocumentId": "",
			"PurchaseOrderNumber": "",
			"Quantity": 7,
			"SubTotal": 511,
			"Taxes": [{
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "GST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "HST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "PST",
				"Value": 0
			}, {
				"EditFlag": "N",
				"Percent": 0,
				"TaxLabel": "QST",
				"Value": 0
			}],
			"TotalDeductionAmount": 0,
			"TotalPercentageDiscount": 0,
			"TotalTax": 0,
			"UnitPrice": 73,
			"UnitTypeDescription": "Each"
		}],
		"LastUpdateProgramId": "Alto Exchange",
		"LastUpdateTimestamp": "2021-04-06T21:08:24.462Z",
		"LastUpdateUserId": "GENERICTOWING",
		"LastUpdatedWorkflowStatus": "",
		"ModelName": "B2B",
		"NumLineItem": 4,
		"OrganizationId": 0,
		"OriginatorEmail": "mng@trimac.com",
		"OriginatorEmplNum": "60636721991a5b185414b77e",
		"OriginatorName": "Morley G Ng",
		"OriginatorPhone": "403-298-5018",
		"PostedDate": "",
		"PostedStatus": 0,
		"PriorityCode": "NET30",
		"QbyteInvcId": 0,
		"QbyteVoucherId": 0,
		"ReceivedDate": "",
		"RejectComment": "",
		"RejectReason": "",
		"SentForApprovalDate": "",
		"ServiceDate": "2021-04-06T18:10:19.749Z",
		"SourceSysInvoiceId": 0,
		"SourceSystemId": "Alto Exchange",
		"Status": "Submitted",
		"SubTotalAmount": 861.4,
		"SupplierId": "2538619588",
		"SupplierName": "suppliertrimac1",
		"TaxId": "",
		"TotalDeductionAmount": 0,
		"TotalTaxAmount": 0,
		"UserEmail": "suppliertrimac1@gmail.com",
		"UserEmployeeDocumentId": "",
		"WorkOrder": "",
		"WorkflowStatus": "",
		"_id": "606ca44ee1f05515525b7f59"
	}]

  let items = data
  let currentPage = 1
  let pageSize = 4
  $: paginatedItems = paginate({ items, pageSize, currentPage })
  

  // can be one of light or dark
  export let color = "light";
</script>


<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color === 'light' ? 'bg-white' : 'bg-red-800 text-white'}"
>

  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-lg {color === 'light' ? 'text-blueGray-700' : 'text-white'}"
        >
          Invoices
        </h3>
      </div>
    </div>
  </div>
  
  <div class="block w-full overflow-x-auto">
    <!-- Projects table -->
    
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          {#each columns as colName}
          <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}">
           {colName}
          </th>
          {/each}
          
        </tr>
      </thead>
      <tbody>
        {#each data as row}
        <tr>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" contenteditable="true" >

          <label
          class="inline-flex justify-items-stretch cursor-pointer"
        >
          <input
            id="customCheckLogin"
            type="checkbox"
            class="form-checkbox border-b-1 border-blueGray-300 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
          />
        </label>
      </td>
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" contenteditable="true" bind:innerHTML={row.InvoiceNumber} />
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" contenteditable="true" bind:innerHTML={row.InvoiceDate} />
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" contenteditable="true" bind:innerHTML={row.InvoiceAmount} />
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" contenteditable="true" bind:innerHTML={row.BaName} />
          <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" contenteditable="true" bind:innerHTML={row.OriginatorName} />
     
        </tr>
      {/each}
        
      </tbody>

    </table>
    <div class="py-2 flex justify-end">
      <LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>
      <!-- <nav class="block">
        <ul class="flex pl-0 rounded list-none flex-wrap">
          <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500">
              <i class="fas fa-chevron-left -ml-px"></i>
            </a>
          </li>
          <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 text-white bg-blueGray-600">
              1
            </a>
          </li>
          <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500">
              2
            </a>
          </li>
          <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500">
              3
            </a>
          </li>
          <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500">
              4
            </a>
          </li>
          <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500">
              5
            </a>
          </li>
          <li>
            <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-orange-500 bg-white text-orange-500">
              <i class="fas fa-chevron-right -mr-px"></i>
            </a>
          </li>
        </ul>
      </nav> -->
    </div>
    
  </div>
</div>
