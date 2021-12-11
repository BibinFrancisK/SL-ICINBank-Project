(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Java\My_Projects\DONT DELETE - for upcoming phases\ICIN with Docker\Bank-Prototype\frontend\icin-bank\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/current-user/data.service */ "xHqQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class HeaderComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ngOnInit() {
    }
    onDashboard() {
        this.router.navigate(['bank/home']);
    }
    onAccounts() {
        this.router.navigate(['bank/accounts']);
    }
    onChequeBooks() {
        this.router.navigate(['bank/cheque-books']);
    }
    onTransaction() {
        this.router.navigate(['bank/transactions']);
    }
    onTransfer() {
        this.router.navigate(['bank/transfer']);
    }
    onProfile() {
        this.router.navigate(['bank/profile']);
    }
    onLogout() {
        this.dataService.setIsSafe(false);
        this.dataService.setUser(null);
        this.router.navigate(['login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 30, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand", "ml-4"], [1, "fas", "fa-university"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", "btn", "bg-transparent", 3, "click"], [1, "navbar-nav"], [1, "nav-item", "my-2", "my-lg-0"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ICIN Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { return ctx.onDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_12_listener() { return ctx.onAccounts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_15_listener() { return ctx.onChequeBooks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cheque Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() { return ctx.onTransaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_21_listener() { return ctx.onTransfer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tranfer Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_24_listener() { return ctx.onProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_28_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "3DTq":
/*!****************************************************************!*\
  !*** ./src/app/components/bank/transfer/transfer.component.ts ***!
  \****************************************************************/
/*! exports provided: TransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferComponent", function() { return TransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/current-user/data.service */ "xHqQ");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/account/account.service */ "IRyT");
/* harmony import */ var _services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/transactions/transactions.service */ "7caK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class TransferComponent {
    constructor(dataService, accountService, transactionService) {
        this.dataService = dataService;
        this.accountService = accountService;
        this.transactionService = transactionService;
        this.transferAccountNumber = '';
        this.selfAccountNumber = '';
        this.transferAccountType = '';
        this.selfAccountType = '';
        this.isChecked = false;
        this.transferMessage = '';
        this.primaryBalance = 0;
        this.savingsBalance = 0;
    }
    ngOnInit() {
        this.accountService.getAccountByNumber(this.dataService.getUser().accountNumber)
            .subscribe(account => {
            this.myAccount = account;
            this.selfAccountNumber = this.myAccount.accountNumber;
            this.primaryBalance = this.myAccount.accountBalancePrimary;
            this.savingsBalance = this.myAccount.accountBalanceSavings;
        }, error => console.log(error));
    }
    changed(event) {
        if (event.target.checked) {
            this.isChecked = true;
            this.transferAccountNumber = this.myAccount.accountNumber;
        }
        else {
            this.isChecked = false;
            this.transferAccountNumber = '';
        }
    }
    transferMoney() {
        if (this.transferAccountNumber === '' ||
            this.transferAccountType === '' ||
            this.selfAccountNumber === '' ||
            this.selfAccountType === '' ||
            this.transferMessage === '') {
            alert('You need to enter all the details above!');
            return;
        }
        if (!(this.selfAccountType === 'Savings' || this.selfAccountType === 'Primary')) {
            alert('Wrong Self Account Type! Please type either Savings or Primary only!');
            return;
        }
        if (!(this.transferAccountType === 'Savings' || this.transferAccountType === 'Primary')) {
            alert('Wrong Transfer Account Type! Please type either Savings or Primary only!');
            return;
        }
        if (!(this.selfAccountNumber === this.myAccount.accountNumber)) {
            alert('Your account number is wrong!');
            return;
        }
        if (this.isChecked) {
            if (this.selfAccountType === this.transferAccountType) {
                alert('Illegal transaction!');
                return;
            }
        }
        if (this.selfAccountType === 'Primary' && this.myAccount.accountBalancePrimary < this.tranferAmount) {
            alert(`You only have Rs. ${this.myAccount.accountBalancePrimary} in your primary account\nYou need Rs. ${Math.round(this.tranferAmount - this.myAccount.accountBalancePrimary)} more to transfer`);
            return;
        }
        if (this.selfAccountType === 'Savings' && this.myAccount.accountBalanceSavings < this.tranferAmount) {
            alert(`You only have Rs. ${this.myAccount.accountBalanceSavings} in your savings account\nYou need Rs. ${Math.round(this.tranferAmount - this.myAccount.accountBalanceSavings)} more to transfer!`);
            return;
        }
        let transaction = {
            fromAccountNumber: this.selfAccountNumber,
            toAccountNumber: this.transferAccountNumber,
            fromAccountType: this.selfAccountType,
            toAccountType: this.transferAccountType,
            transferAmount: this.tranferAmount,
            transferMessage: this.transferMessage,
            transferStatus: 0
        };
        this.transactionService.putTransaction(transaction)
            .subscribe(message => {
            alert(message.message);
        }, error => console.log(error), () => {
            this.transferAccountNumber = '';
            this.transferAccountType = '';
            this.selfAccountNumber = '';
            this.selfAccountType = '';
            this.tranferAmount = 0;
            this.isChecked = false;
            this.transferMessage = '';
        });
    }
    selectSelfPrimary(event) {
        if (event.target.checked) {
            this.selfAccountType = 'Primary';
        }
        else {
            this.selfAccountType = 'Savings';
        }
    }
    selectSelfSavings(event) {
        if (event.target.checked) {
            this.selfAccountType = 'Savings';
        }
        else {
            this.selfAccountType = 'Primary';
        }
    }
}
TransferComponent.ɵfac = function TransferComponent_Factory(t) { return new (t || TransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_3__["TransactionsService"])); };
TransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransferComponent, selectors: [["app-transfer"]], decls: 51, vars: 7, consts: [[1, "container", "pl-5"], [1, "row", "py-5", "mt-2", "align-items-center", "myDiv"], [1, "col-md-5", "ml-5", "pr-lg-5", "mb-5", "mb-md-0", "text-center"], ["src", "https://raw.githubusercontent.com/mRahulJain/TEKsystemsGS/dd8f954be7523fa05f8ff2e8a669a2c1c5be3807/Capstone/frontend/icin-bank/src/assets/svgTransfer.svg", "alt", "", 1, "img-fluid", "mb-3", "d-none", "d-md-block"], [1, "col-md-7", "col-lg-6", "ml-auto"], ["action", "#"], [1, "row"], [1, "input-group", "col-lg-12", "mb-3", "text-center"], [1, "form-check", "form-switch", "ml-4"], ["type", "checkbox", "id", "flexSwitchCheckChecked", 1, "form-check-input", 3, "checked", "change"], ["for", "flexSwitchCheckChecked", 1, "form-check-label"], [1, "input-group", "col-lg-12", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text", "bg-white", "px-4", "border-md", "border-right-0"], [1, "fas", "fa-id-card-alt", "text-muted"], ["id", "transferAccountNumber", "type", "text", "name", "transferAccountNumber", "placeholder", "To Account Number", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-money-check-alt", "text-muted"], ["id", "transferAccountType", "type", "text", "name", "transferAccountType", "placeholder", "To Account Type (Primary/Savings)", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "col-lg-12", "mb-1", "font-weight-bold"], [1, "input-group", "col-lg-12", "mb-3", "ml-1"], [1, "form-check", "col-lg-6"], ["type", "radio", "name", "selfAccountType", "id", "selfAccountType", 1, "form-check-input", 3, "change"], ["for", "selfAccountType", 1, "form-check-label"], [1, "fas", "fa-rupee-sign", "text-muted"], ["id", "tranferAmount", "type", "number", "name", "tranferAmount", "placeholder", "Enter Amount", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-comment-dots", "text-muted"], ["id", "transferMessage", "type", "text", "name", "transferMessage", "placeholder", "Enter Message", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "input-group", "col-lg-12", "mb-4"], [1, "btn", "btn-success", "btn-block", "py-2", 3, "click"], [1, "font-weight-bold", "text-white"]], template: function TransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TransferComponent_Template_input_change_9_listener($event) { return ctx.changed($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Transfer to self ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransferComponent_Template_input_ngModelChange_16_listener($event) { return ctx.transferAccountNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransferComponent_Template_input_ngModelChange_21_listener($event) { return ctx.transferAccountType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose your account type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TransferComponent_Template_input_change_26_listener($event) { return ctx.selectSelfPrimary($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Primary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TransferComponent_Template_input_change_32_listener($event) { return ctx.selectSelfSavings($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Savings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransferComponent_Template_input_ngModelChange_41_listener($event) { return ctx.tranferAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransferComponent_Template_input_ngModelChange_46_listener($event) { return ctx.transferMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransferComponent_Template_a_click_48_listener() { return ctx.transferMoney(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Transfer Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.transferAccountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.transferAccountType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(Balance: \u20B9 ", ctx.primaryBalance, "/-)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(Balance: \u20B9 ", ctx.savingsBalance, "/-)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tranferAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.transferMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InRyYW5zZmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlEaXYge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "3cTk":
/*!******************************************************************!*\
  !*** ./src/app/services/routing-service/user-routing.service.ts ***!
  \******************************************************************/
/*! exports provided: UserRoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingService", function() { return UserRoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _current_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../current-user/data.service */ "xHqQ");



class UserRoutingService {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    canActivateChild(route, state) {
        if (this.dataService.getIsSafe() == true) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
UserRoutingService.ɵfac = function UserRoutingService_Factory(t) { return new (t || UserRoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_user_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
UserRoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserRoutingService, factory: UserRoutingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3lyW":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/admin-login/admin-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_current_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/current-admin/admin-data.service */ "DPrs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AdminLoginComponent {
    constructor(router, adminDataService) {
        this.router = router;
        this.adminDataService = adminDataService;
        this.adminUsername = '';
        this.adminPassword = '';
    }
    ngOnInit() {
    }
    loginAdmin() {
        if (this.adminUsername === 'admin' && this.adminPassword === 'icinbank') {
            this.adminDataService.setIsSafe(true);
            this.router.navigate(['admin/options']);
            return;
        }
        alert('Incorrect Credentials!');
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_2__["AdminDataService"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 28, vars: 2, consts: [[1, "container"], [1, "row", "py-5", "mt-4", "align-items-center", "myDiv"], [1, "col-md-5", "pr-lg-5", "mb-5", "mb-md-0", "text-center"], ["src", "https://raw.githubusercontent.com/mRahulJain/TEKsystemsGS/dd8f954be7523fa05f8ff2e8a669a2c1c5be3807/Capstone/frontend/icin-bank/src/assets/svgSecure.svg", "alt", "", 1, "img-fluid", "mb-3", "d-none", "d-md-block"], [1, "font-italic", "text-muted", "display-5", "font-weight-bold"], [1, "col-md-7", "col-lg-6", "ml-auto"], ["action", "#"], [1, "row"], [1, "col-lg-12", "text-center", "mb-3"], [1, "display-4"], [1, "input-group", "col-lg-12", "mb-4"], [1, "input-group-prepend"], [1, "input-group-text", "bg-white", "px-4", "border-md", "border-right-0"], [1, "fas", "fa-id-card-alt", "text-muted"], ["id", "adminUsername", "type", "text", "name", "adminUsername", "placeholder", "Admin User Name", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-lock", "text-muted"], ["id", "adminPassword", "type", "password", "name", "adminPassword", "placeholder", "Admin Password", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-lg-12", "mx-auto", "mb-0"], [1, "btn", "btn-primary", "btn-block", "py-2", 3, "click"], [1, "font-weight-bold", "text-white"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICINadmin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Admin Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "----------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.adminUsername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_23_listener($event) { return ctx.adminPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLoginComponent_Template_a_click_25_listener() { return ctx.loginAdmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adminUsername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adminPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 84vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlEaXYge1xyXG4gICAgaGVpZ2h0OiA4NHZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "7caK":
/*!***************************************************************!*\
  !*** ./src/app/services/transactions/transactions.service.ts ***!
  \***************************************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TransactionsService {
    // private baseURL = 'http://icinbank.ap-south-1.elasticbeanstalk.com';
    constructor(http) {
        this.http = http;
        // private baseURL = 'http://localhost:9090';
        this.baseURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}:9090`;
    }
    putTransaction(transaction) {
        return this.http.post(`${this.baseURL}/transactions/putTransaction`, transaction);
    }
    getTransactions(accountNumber) {
        return this.http.get(`${this.baseURL}/transactions/${accountNumber}`);
    }
    getFilteredTransactions(accountNumber, startDate, endDate) {
        return this.http.get(`${this.baseURL}/transactions/${accountNumber}/${startDate}/${endDate}`);
    }
    getAllPendingTransaction() {
        return this.http.get(`${this.baseURL}/admin/get-all-pending-transactions`);
    }
    permitTransaction(id) {
        return this.http.get(`${this.baseURL}/admin/allow/transaction/${id}`);
    }
}
TransactionsService.ɵfac = function TransactionsService_Factory(t) { return new (t || TransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TransactionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TransactionsService, factory: TransactionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8n4u":
/*!**************************************************************!*\
  !*** ./src/app/components/bank/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/current-user/data.service */ "xHqQ");
/* harmony import */ var _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/users/user-service.service */ "DiSl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class ProfileComponent {
    constructor(dataService, userService) {
        this.dataService = dataService;
        this.userService = userService;
        this.loginUserId = '';
        this.loginUserPassword = '';
        this.userAccountNumber = '';
        this.userAccountHolderName = '';
        this.passwordLoginIcon = 'fas fa-eye-slash';
        this.passwordLoginType = 'password';
        this.lockIcon = 'fas fa-lock';
    }
    ngOnInit() {
        let user = this.dataService.getUser();
        this.loginUserId = user.accountLoginUserId;
        this.loginUserPassword = user.accountLoginPassword;
        this.userAccountNumber = user.accountNumber;
        this.userAccountHolderName = user.accountHolderName;
    }
    onLoginPasswordToggle() {
        if (this.passwordLoginIcon === 'fas fa-eye-slash') {
            this.passwordLoginIcon = 'fas fa-eye';
            this.passwordLoginType = 'text';
            this.lockIcon = 'fas fa-unlock';
        }
        else {
            this.passwordLoginIcon = 'fas fa-eye-slash';
            this.passwordLoginType = 'password';
            this.lockIcon = 'fas fa-lock';
        }
    }
    updateLoginPassword() {
        if (this.loginUserPassword === '') {
            alert('You need to enter a password!');
            return;
        }
        this.userService
            .updateLoginPassword(this.loginUserPassword, this.userAccountNumber)
            .subscribe(message => {
            let user = this.dataService.getUser();
            user.accountLoginPassword = this.loginUserPassword;
            this.dataService.setUser(user);
            alert(message.message);
        }, error => console.log(error));
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 42, vars: 11, consts: [[1, "container"], [1, "row", "py-5", "mt-2", "align-items-center", "myDiv"], [1, "col-md-5", "ml-5", "pr-lg-5", "mb-5", "mb-md-0", "text-center"], ["src", "https://raw.githubusercontent.com/mRahulJain/TEKsystemsGS/dd8f954be7523fa05f8ff2e8a669a2c1c5be3807/Capstone/frontend/icin-bank/src/assets/svgProfile.svg", "alt", "", 1, "img-fluid", "mb-3", "d-none", "d-md-block"], [1, "col-md-7", "col-lg-6", "ml-auto"], ["action", "#"], [1, "row"], [1, "col-lg-12"], [1, "input-group", "col-lg-12", "mb-4"], [1, "input-group-prepend"], [1, "input-group-text", "bg-white", "px-4", "border-md", "border-right-0"], [1, "fas", "fa-user", "text-muted"], ["readonly", "", "id", "userAccountHolderName", "type", "text", "name", "userAccountHolderName", "placeholder", "User Login Id", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-id-card-alt", "text-muted"], ["readonly", "", "id", "userAccountNumber", "type", "text", "name", "userAccountNumber", "placeholder", "User Login Id", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], ["readonly", "", "id", "loginUserId", "type", "text", "name", "loginUserId", "placeholder", "User Login Id", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "input-group", "col-lg-6", "mb-4"], ["id", "loginUserPassword", "name", "loginUserPassword", "placeholder", "Login Password", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", "myPadding", 3, "ngModel", "type", "ngModelChange"], [1, "input-group-text", "bg-white", "px-4", "border-md", "border-left-0", 3, "click"], [1, "btn", "btn-primary", "btn-block", "py-2", 3, "click"], [1, "font-weight-bold", "text-white"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userAccountHolderName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login User Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_20_listener($event) { return ctx.userAccountNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Login User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_27_listener($event) { return ctx.loginUserId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login User Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_34_listener($event) { return ctx.loginUserPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_span_click_36_listener() { return ctx.onLoginPasswordToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_a_click_39_listener() { return ctx.updateLoginPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userAccountHolderName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userAccountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.lockIcon, " text-muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.passwordLoginType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.passwordLoginIcon, " text-muted");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n}\r\n.myPadding[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15RGl2IHtcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG4ubXlQYWRkaW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "A2s4":
/*!***********************************************************!*\
  !*** ./src/app/components/admin/admin/admin.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 1, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://localhost"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ctv9":
/*!****************************************************************!*\
  !*** ./src/app/components/bank/accounts/accounts.component.ts ***!
  \****************************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/current-user/data.service */ "xHqQ");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/account/account.service */ "IRyT");



class AccountsComponent {
    constructor(dataService, accountService) {
        this.dataService = dataService;
        this.accountService = accountService;
        this.accountNumber = '';
        this.accountHolderName = '';
        this.accountCIFNumber = '';
        this.accountBranch = '';
        this.accountBalancePrimary = 0;
        this.accountBalanceSavings = 0;
    }
    ngOnInit() {
        this.accountService.getAccountByNumber(this.dataService.getUser().accountNumber)
            .subscribe(account => {
            this.accountNumber = account.accountNumber;
            this.accountHolderName = account.accountHolderName;
            this.accountCIFNumber = account.accountCIFNumber;
            this.accountBranch = account.accountBranch;
            this.accountBalancePrimary = account.accountBalancePrimary;
            this.accountBalanceSavings = account.accountBalanceSavings;
        }, error => console.log(error));
    }
}
AccountsComponent.ɵfac = function AccountsComponent_Factory(t) { return new (t || AccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"])); };
AccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountsComponent, selectors: [["app-accounts"]], decls: 42, vars: 6, consts: [[1, "container", "pl-5"], [1, "row", "py-5", "align-items-center", "myDiv"], [1, "col-md-4", "pr-lg-5", "mb-5", "mb-md-0", "text-center"], ["src", "https://raw.githubusercontent.com/mRahulJain/TEKsystemsGS/dd8f954be7523fa05f8ff2e8a669a2c1c5be3807/Capstone/frontend/icin-bank/src/assets/svgAccount.svg", "alt", "", 1, "img-fluid", "mb-3", "d-none", "d-md-block"], [1, "col-md-7", "col-lg-7", "ml-auto"], [1, "row", "myHoverClass"], [1, "col-lg-6", "text-center", "border", "border-info", "border-right-0", "rounded-left", "p-3", "mb-1"], [1, "myText"], [1, "col-lg-6", "text-center", "border", "border-info", "rounded-right", "p-3", "mb-1"], [1, "col-lg-6", "text-center", "border", "border-info", "rounded-left", "border-right-0", "p-3"], [1, "col-lg-6", "text-center", "border", "border-info", "rounded-right", "p-3"]], template: function AccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Account Holder Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Account CIF Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Account Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Primary Account Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Savings Account Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accountHolderName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accountCIFNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.accountBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.accountBalancePrimary, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.accountBalanceSavings, "");
    } }, styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n}\r\n.myHoverClass[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    background: #6c63ff;\r\n    color: white;\r\n}\r\n.myText[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    font-weight:600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkIiLCJmaWxlIjoiYWNjb3VudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teURpdiB7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuLm15SG92ZXJDbGFzcyA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzZjNjNmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubXlUZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "DPrs":
/*!**************************************************************!*\
  !*** ./src/app/services/current-admin/admin-data.service.ts ***!
  \**************************************************************/
/*! exports provided: AdminDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDataService", function() { return AdminDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AdminDataService {
    constructor() {
        this.isSafe = false;
    }
    getIsSafe() {
        return this.isSafe;
    }
    setIsSafe(isSafe) {
        this.isSafe = isSafe;
    }
}
AdminDataService.ɵfac = function AdminDataService_Factory(t) { return new (t || AdminDataService)(); };
AdminDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminDataService, factory: AdminDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DiSl":
/*!********************************************************!*\
  !*** ./src/app/services/users/user-service.service.ts ***!
  \********************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserServiceService {
    // private baseURL = 'http://icinbank.ap-south-1.elasticbeanstalk.com';
    constructor(http) {
        this.http = http;
        // private baseURL = 'http://localhost:9090';
        this.baseURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}:9090`;
    }
    putUser(user) {
        let targetURL = '/users/addUser';
        return this.http.post(this.baseURL + targetURL, user);
    }
    checkUserByIdAndPassword(loginUserId, loginUserPassword) {
        let targetURL = `/users/check/${loginUserId}/${loginUserPassword}`;
        return this.http.get(this.baseURL + targetURL);
    }
    getAllBlockedUser() {
        return this.http.get(`${this.baseURL}/users/blocked-users`);
    }
    blockUser(loginUserId) {
        return this.http.get(`${this.baseURL}/users/block/${loginUserId}`);
    }
    unblockUser(loginUserId) {
        return this.http.get(`${this.baseURL}/users/unblock/${loginUserId}`);
    }
    getUser(loginUserId) {
        return this.http.get(`${this.baseURL}/users/${loginUserId}`);
    }
    updateLoginPassword(newPassword, accountNumber) {
        return this.http.get(`${this.baseURL}/users/update/loginPassword/${newPassword}/${accountNumber}`);
    }
    updateTransactionPassword(newPassword, accountNumber) {
        return this.http.get(`${this.baseURL}/users/update/transactionPassword/${newPassword}/${accountNumber}`);
    }
    requestChequeBook(accountNumber, accountType) {
        return this.http.get(`${this.baseURL}/users/request-cheque-book/${accountNumber}/${accountType}`);
    }
    getChequeBooks(accountNumber) {
        return this.http.get(`${this.baseURL}/users/cheque-books/${accountNumber}`);
    }
    getAllChequeBookRequests() {
        return this.http.get(`${this.baseURL}/admin/cheque-books-requests`);
    }
    acceptChequeBookRequest(chequeBookNumber) {
        return this.http.get(`${this.baseURL}/admin/cheque-books-requests/accept/${chequeBookNumber}`);
    }
}
UserServiceService.ɵfac = function UserServiceService_Factory(t) { return new (t || UserServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserServiceService, factory: UserServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FdAr":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin/admin-block-accounts/admin-block-accounts.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdminBlockAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminBlockAccountsComponent", function() { return AdminBlockAccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/users/user-service.service */ "DiSl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AdminBlockAccountsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBlockAccountsComponent_tr_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.unblock(user_r1["accountLoginUserId"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UNBLOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1["accountLoginUserId"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1["accountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1["accountHolderName"]);
} }
class AdminBlockAccountsComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.allowBack = false;
        this.allowNext = false;
    }
    ngOnInit() {
        this.userService.getAllBlockedUser()
            .subscribe(users => {
            if (users.length > 5) {
                this.allowNext = true;
            }
            this.users = users;
            this.current = 0;
            this.toShowUsers = this.users.slice(this.current, this.current + 5);
        }, error => console.log(error));
    }
    onPrev() {
        this.allowNext = true;
        this.current = this.current - 5;
        this.toShowUsers = this.users.slice(this.current, this.current + 5);
        if (this.current - 5 < 0) {
            this.allowBack = false;
        }
        else {
            this.allowBack = true;
        }
    }
    onNext() {
        this.allowBack = true;
        this.current = this.current + 5;
        this.toShowUsers = this.users.slice(this.current, this.current + 5);
        if (this.current + 5 >= this.users.length) {
            this.allowNext = false;
        }
        else {
            this.allowNext = true;
        }
    }
    unblock(loginUserId) {
        this.userService.unblockUser(loginUserId)
            .subscribe(message => {
            alert(message.message);
            this.userService.getAllBlockedUser()
                .subscribe(users => {
                if (users.length > 5) {
                    this.allowNext = true;
                }
                this.users = users;
                this.toShowUsers = this.users.slice(this.current, this.current + 5);
            }, error => console.log(error));
        }, error => console.log(error));
    }
    onBack() {
        this.router.navigate(['admin/options']);
    }
    onRefresh() {
        this.userService.getAllBlockedUser()
            .subscribe(users => {
            if (users.length > 5) {
                this.allowNext = true;
            }
            this.users = users;
            this.toShowUsers = this.users.slice(this.current, this.current + 5);
        }, error => console.log(error));
    }
}
AdminBlockAccountsComponent.ɵfac = function AdminBlockAccountsComponent_Factory(t) { return new (t || AdminBlockAccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminBlockAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminBlockAccountsComponent, selectors: [["app-admin-block-accounts"]], decls: 25, vars: 3, consts: [[1, "myContainer"], [1, "row", "mb-4"], [1, "col", "ml-4", "btn", "btn-danger", "text-center", 3, "click"], [1, "col-8", "text-center", "font-weight-bold"], [1, "col", "mr-4", "btn", "btn-warning", "text-center", 3, "click"], [1, "col-md-12", "col-lg-12", "ml-auto"], [1, "table"], [1, "table-active"], ["scope", "col", 1, "border-right"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-12", "float-right"], [1, "btn", "btn-primary", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["scope", "row", 1, "border-right"], [1, "bg-danger", "btn", "btn-danger", 3, "click"]], template: function AdminBlockAccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBlockAccountsComponent_Template_span_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blocked Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBlockAccountsComponent_Template_span_click_6_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Refersh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Account Holder Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdminBlockAccountsComponent_tr_19_Template, 10, 3, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBlockAccountsComponent_Template_button_click_21_listener() { return ctx.onPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminBlockAccountsComponent_Template_button_click_23_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toShowUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowBack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowNext);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".myContainer[_ngcontent-%COMP%] {\r\n    height: 83vh;\r\n    margin-top: 2%;\r\n    margin-left: 7%;\r\n    margin-right: 7%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWJsb2NrLWFjY291bnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYWRtaW4tYmxvY2stYWNjb3VudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgzdmg7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "GCgJ":
/*!**************************************************************************!*\
  !*** ./src/app/services/admin-routing-services/admin-routing.service.ts ***!
  \**************************************************************************/
/*! exports provided: AdminRoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingService", function() { return AdminRoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _current_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current-admin/admin-data.service */ "DPrs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminRoutingService {
    constructor(adminService, router) {
        this.adminService = adminService;
        this.router = router;
    }
    canActivateChild(childRoute, state) {
        if (this.adminService.getIsSafe() == true) {
            return true;
        }
        let url = childRoute.url.toString();
        if (url === 'login') {
            return true;
        }
        this.router.navigate(['admin/login']);
        return false;
    }
}
AdminRoutingService.ɵfac = function AdminRoutingService_Factory(t) { return new (t || AdminRoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_current_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_1__["AdminDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminRoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminRoutingService, factory: AdminRoutingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HyyY":
/*!********************************************************!*\
  !*** ./src/app/components/bank/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/current-user/data.service */ "xHqQ");


class HomeComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.userName = '';
    }
    ngOnInit() {
        this.userName = this.dataService.getUser().accountHolderName;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 1, consts: [[1, "container"], [1, "row", "py-5", "mt-2", "align-items-center", "myDiv"], [1, "col-md-5", "ml-5", "pr-lg-5", "mb-5", "mb-md-0", "text-center"], ["src", "https://raw.githubusercontent.com/mRahulJain/TEKsystemsGS/dd8f954be7523fa05f8ff2e8a669a2c1c5be3807/Capstone/frontend/icin-bank/src/assets/svgOnlineBanking.svg", "alt", "", 1, "img-fluid", "mb-3", "d-none", "d-md-block"], [1, "display-3"], [1, "col-md-7", "col-lg-6", "ml-auto"], [1, "ml-5", "mb-3"], [1, "ml-5", "font-italic"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICIN Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Choose an option from above and operate banking at home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx.userName, "!");
    } }, styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15RGl2IHtcclxuICAgIGhlaWdodDogOTB2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "HzFZ":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/users/user-service.service */ "DiSl");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/current-user/data.service */ "xHqQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");






class LoginComponent {
    constructor(router, userService, dataService) {
        this.router = router;
        this.userService = userService;
        this.dataService = dataService;
        this.loginUserId = '';
        this.loginUserPassword = '';
        this.currentLoginCount = 3;
    }
    ngOnInit() {
    }
    loginUser() {
        if (this.loginUserId === '' || this.loginUserPassword === '') {
            alert('Please enter above credentials!');
            return;
        }
        this.userService
            .checkUserByIdAndPassword(this.loginUserId, this.loginUserPassword)
            .subscribe(message => {
            if (message.message === 'success') {
                this.userService.getUser(this.loginUserId).subscribe(user => {
                    this.dataService.setUser(user);
                    this.dataService.setIsSafe(true);
                    this.router.navigate(['bank/home']);
                });
            }
            else if (message.message === 'failure') {
                alert(`Your account was blocked in attempt for multiple wrong logins.\nPlease contact your nearest ICIN bank!`);
                return;
            }
            else if (message.message === 'no-user') {
                alert('Username is not registered yet!');
                return;
            }
            else {
                if (this.currentLoginCount === 1) {
                    this.userService.blockUser(this.loginUserId)
                        .subscribe(message => alert(message.message), error => console.log(error));
                    return;
                }
                this.currentLoginCount--;
                alert(`${message.message}\nYou have ${this.currentLoginCount} attempts left!`);
            }
        }, error => console.log(error), () => {
            this.loginUserId = '';
            this.loginUserPassword = '';
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 39, vars: 2, consts: [[1, "container", "myDiv"], [1, "row", "py-5", "mt-4", "align-items-center"], [1, "col-md-5", "pr-lg-5", "mb-5", "mb-md-0", "text-center"], ["src", "https://raw.githubusercontent.com/mRahulJain/TEKsystemsGS/dd8f954be7523fa05f8ff2e8a669a2c1c5be3807/Capstone/frontend/icin-bank/src/assets/svgLogin.svg", "alt", "", 1, "img-fluid", "mb-3", "d-none", "d-md-block"], [1, "display-3"], [1, "col-md-7", "col-lg-6", "ml-auto"], ["action", "#"], [1, "row"], [1, "col-lg-12", "text-center", "mb-3"], [1, "display-4"], [1, "input-group", "col-lg-12", "mb-4"], [1, "input-group-prepend"], [1, "input-group-text", "bg-white", "px-4", "border-md", "border-right-0"], [1, "fas", "fa-id-card-alt", "text-muted"], ["id", "loginUserId", "type", "text", "name", "loginUserId", "placeholder", "User Login Id", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-lock", "text-muted"], ["id", "loginUserPassword", "type", "password", "name", "loginUserPassword", "placeholder", "Login Password", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-lg-12", "mx-auto", "mb-0"], [1, "btn", "btn-primary", "btn-block", "py-2", 3, "click"], [1, "font-weight-bold", "text-white"], [1, "form-group", "col-lg-12", "mx-auto", "d-flex", "align-items-center", "my-4"], [1, "border-bottom", "w-100", "ml-5"], [1, "px-2", "small", "text-muted", "font-weight-bold", "text-muted"], [1, "border-bottom", "w-100", "mr-5"], [1, "text-center", "w-100"], [1, "text-muted", "font-weight-bold"], ["routerLink", "/register", 1, "text-primary", "ml-2"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICIN Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.loginUserId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) { return ctx.loginUserPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_25_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Not Registered Yet For Net Banking? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Register Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlEaXYge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "IRyT":
/*!*****************************************************!*\
  !*** ./src/app/services/account/account.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AccountService {
    // private baseURL = 'http://icinbank.ap-south-1.elasticbeanstalk.com';
    constructor(http) {
        this.http = http;
        // private baseURL = 'http://localhost:9090';
        this.baseURL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}:9090`;
    }
    getAccountByNumber(accountNumber) {
        return this.http.get(`${this.baseURL}/accounts/${accountNumber}`);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KRP+":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin/transaction-requests/transaction-requests.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TransactionRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionRequestsComponent", function() { return TransactionRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/transactions/transactions.service */ "7caK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TransactionRequestsComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRequestsComponent_tr_27_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const transaction_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.allow(transaction_r1["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ALLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["toAccountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["toAccountType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["fromAccountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["fromAccountType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r1["transferAmount"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.generateDate(transaction_r1["transferDate"]));
} }
class TransactionRequestsComponent {
    constructor(transactionService, router) {
        this.transactionService = transactionService;
        this.router = router;
        this.allowBack = false;
        this.allowNext = false;
    }
    ngOnInit() {
        this.transactionService.getAllPendingTransaction()
            .subscribe(transactions => {
            if (transactions.length > 5) {
                this.allowNext = true;
            }
            this.transactions = transactions;
            this.current = 0;
            this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
        }, error => console.log(error));
    }
    onPrev() {
        this.allowNext = true;
        this.current = this.current - 5;
        this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
        if (this.current - 5 < 0) {
            this.allowBack = false;
        }
        else {
            this.allowBack = true;
        }
    }
    onNext() {
        this.allowBack = true;
        this.current = this.current + 5;
        this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
        if (this.current + 5 >= this.transactions.length) {
            this.allowNext = false;
        }
        else {
            this.allowNext = true;
        }
    }
    generateDate(date) {
        let myDate = `${date}`.slice(0, 10);
        return myDate;
    }
    allow(id) {
        this.transactionService.permitTransaction(id)
            .subscribe(message => {
            this.transactionService.getAllPendingTransaction()
                .subscribe(chequeBooks => {
                alert(message.message);
                if (chequeBooks.length > 5) {
                    this.allowNext = true;
                }
                this.transactions = chequeBooks;
                this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
            }, error => console.log(error));
        }, error => console.log(error));
    }
    onBack() {
        this.router.navigate(['admin/options']);
    }
    onRefresh() {
        this.transactionService.getAllPendingTransaction()
            .subscribe(chequeBooks => {
            if (chequeBooks.length > 5) {
                this.allowNext = true;
            }
            this.transactions = chequeBooks;
            this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
        }, error => console.log(error));
    }
}
TransactionRequestsComponent.ɵfac = function TransactionRequestsComponent_Factory(t) { return new (t || TransactionRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_1__["TransactionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TransactionRequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionRequestsComponent, selectors: [["app-transaction-requests"]], decls: 33, vars: 3, consts: [[1, "myContainer"], [1, "row", "mb-4"], [1, "col", "ml-4", "btn", "btn-danger", "text-center", 3, "click"], [1, "col-8", "text-center", "font-weight-bold"], [1, "col", "mr-4", "btn", "btn-warning", "text-center", 3, "click"], [1, "col-md-12", "col-lg-12", "ml-auto"], [1, "table"], [1, "table-active"], ["scope", "col", 1, "border-right"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-12", "float-right"], [1, "btn", "btn-primary", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["scope", "row", 1, "border-right"], [1, "bg-danger", "btn", "btn-danger", 3, "click"]], template: function TransactionRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRequestsComponent_Template_span_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transaction Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRequestsComponent_Template_span_click_6_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Refersh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Transfer To Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Transfer To Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transfer From Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Transfer From Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Transfer Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Transfer Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TransactionRequestsComponent_tr_27_Template, 18, 7, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRequestsComponent_Template_button_click_29_listener() { return ctx.onPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionRequestsComponent_Template_button_click_31_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toShowTransactions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowBack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowNext);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".myContainer[_ngcontent-%COMP%] {\r\n    height: 83vh;\r\n    margin-top: 2%;\r\n    margin-left: 7%;\r\n    margin-right: 7%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLXJlcXVlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoidHJhbnNhY3Rpb24tcmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teUNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgzdmg7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "text-muted"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Rights Reserved 2021 \u00A9 ICIN Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    padding-left: 10px;\r\n    padding-top: 25px;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    background-color: #222222;\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'icin-bank';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Who0":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/cheque-requests/cheque-requests.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChequeRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeRequestsComponent", function() { return ChequeRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/users/user-service.service */ "DiSl");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/current-user/data.service */ "xHqQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ChequeRequestsComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeRequestsComponent_tr_21_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const chequeBook_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.allow(chequeBook_r1["chequeBookNumber"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ALLOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chequeBook_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chequeBook_r1["chequeBookNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chequeBook_r1["accountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chequeBook_r1["accountType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.generateDate(chequeBook_r1["chequeBookIssueDate"]));
} }
class ChequeRequestsComponent {
    constructor(userService, dataService, router) {
        this.userService = userService;
        this.dataService = dataService;
        this.router = router;
        this.allowBack = false;
        this.allowNext = false;
    }
    ngOnInit() {
        this.userService.getAllChequeBookRequests()
            .subscribe(chequeBooks => {
            if (chequeBooks.length > 5) {
                this.allowNext = true;
            }
            this.chequeBooks = chequeBooks;
            this.current = 0;
            this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
        }, error => console.log(error));
    }
    onPrev() {
        this.allowNext = true;
        this.current = this.current - 5;
        this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
        if (this.current - 5 < 0) {
            this.allowBack = false;
        }
        else {
            this.allowBack = true;
        }
    }
    onNext() {
        this.allowBack = true;
        this.current = this.current + 5;
        this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
        if (this.current + 5 >= this.chequeBooks.length) {
            this.allowNext = false;
        }
        else {
            this.allowNext = true;
        }
    }
    generateDate(date) {
        let myDate = `${date}`.slice(0, 10);
        return myDate;
    }
    allow(chequeBookNumber) {
        this.userService.acceptChequeBookRequest(chequeBookNumber)
            .subscribe(message => {
            this.userService.getAllChequeBookRequests()
                .subscribe(chequeBooks => {
                alert(message.message);
                if (chequeBooks.length > 5) {
                    this.allowNext = true;
                }
                this.chequeBooks = chequeBooks;
                this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
            }, error => console.log(error));
        }, error => console.log(error));
    }
    onBack() {
        this.router.navigate(['admin/options']);
    }
    onRefresh() {
        this.userService.getAllChequeBookRequests()
            .subscribe(chequeBooks => {
            if (chequeBooks.length > 5) {
                this.allowNext = true;
            }
            this.chequeBooks = chequeBooks;
            this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
        }, error => console.log(error));
    }
}
ChequeRequestsComponent.ɵfac = function ChequeRequestsComponent_Factory(t) { return new (t || ChequeRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ChequeRequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChequeRequestsComponent, selectors: [["app-cheque-requests"]], decls: 27, vars: 3, consts: [[1, "myContainer"], [1, "row", "mb-4"], [1, "col", "ml-4", "btn", "btn-danger", "text-center", 3, "click"], [1, "col-8", "text-center", "font-weight-bold"], [1, "col", "mr-4", "btn", "btn-warning", "text-center", 3, "click"], [1, "col-md-12", "col-lg-12", "ml-auto"], [1, "table"], [1, "table-active"], ["scope", "col", 1, "border-right"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-12", "float-right"], [1, "btn", "btn-primary", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["scope", "row", 1, "border-right"], [1, "btn", "btn-danger", "bg-danger", "text-center", 3, "click"]], template: function ChequeRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeRequestsComponent_Template_span_click_2_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cheque Book Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeRequestsComponent_Template_span_click_6_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Refersh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cheque Book Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cheque Book Issue Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ChequeRequestsComponent_tr_21_Template, 12, 4, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeRequestsComponent_Template_button_click_23_listener() { return ctx.onPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeRequestsComponent_Template_button_click_25_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toShowChequeBooks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowBack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowNext);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".myContainer[_ngcontent-%COMP%] {\r\n    height: 83vh;\r\n    margin-top: 2%;\r\n    margin-left: 7%;\r\n    margin-right: 7%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXF1ZS1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNoZXF1ZS1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODN2aDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "YtXh":
/*!********************************************************!*\
  !*** ./src/app/components/bank/bank/bank.component.ts ***!
  \********************************************************/
/*! exports provided: BankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankComponent", function() { return BankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");




class BankComponent {
    constructor() { }
    ngOnInit() {
    }
}
BankComponent.ɵfac = function BankComponent_Factory(t) { return new (t || BankComponent)(); };
BankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BankComponent, selectors: [["app-bank"]], decls: 3, vars: 0, template: function BankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiYmFuay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15RGl2IHtcclxuICAgIGhlaWdodDogOTB2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_admin_routing_services_admin_routing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/admin-routing-services/admin-routing.service */ "GCgJ");
/* harmony import */ var _services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/transactions/transactions.service */ "7caK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _components_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/registration/registration.component */ "g4ui");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/users/user-service.service */ "DiSl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_bank_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bank/home/home.component */ "HyyY");
/* harmony import */ var _components_bank_bank_bank_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bank/bank/bank.component */ "YtXh");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/current-user/data.service */ "xHqQ");
/* harmony import */ var _components_bank_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/bank/profile/profile.component */ "8n4u");
/* harmony import */ var _components_bank_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/bank/accounts/accounts.component */ "Ctv9");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/account/account.service */ "IRyT");
/* harmony import */ var _components_bank_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/bank/transfer/transfer.component */ "3DTq");
/* harmony import */ var _components_bank_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/bank/transactions/transactions.component */ "d8Xf");
/* harmony import */ var _components_bank_cheque_books_cheque_books_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/bank/cheque-books/cheque-books.component */ "rJbn");
/* harmony import */ var _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/admin-login/admin-login.component */ "3lyW");
/* harmony import */ var _components_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin/admin/admin.component */ "A2s4");
/* harmony import */ var _components_admin_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin/admin-list/admin-list.component */ "t/Q3");
/* harmony import */ var _components_admin_cheque_requests_cheque_requests_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin/cheque-requests/cheque-requests.component */ "Who0");
/* harmony import */ var _components_admin_transaction_requests_transaction_requests_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin/transaction-requests/transaction-requests.component */ "KRP+");
/* harmony import */ var _components_admin_admin_block_accounts_admin_block_accounts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admin/admin-block-accounts/admin-block-accounts.component */ "FdAr");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");





























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ providers: [_services_users_user_service_service__WEBPACK_IMPORTED_MODULE_10__["UserServiceService"], _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"], _services_account_account_service__WEBPACK_IMPORTED_MODULE_17__["AccountService"], _services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_1__["TransactionsService"], _services_admin_routing_services_admin_routing_service__WEBPACK_IMPORTED_MODULE_0__["AdminRoutingService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _components_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _components_bank_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _components_bank_bank_bank_component__WEBPACK_IMPORTED_MODULE_13__["BankComponent"],
        _components_bank_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        _components_bank_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_16__["AccountsComponent"],
        _components_bank_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_18__["TransferComponent"],
        _components_bank_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_19__["TransactionsComponent"],
        _components_bank_cheque_books_cheque_books_component__WEBPACK_IMPORTED_MODULE_20__["ChequeBooksComponent"],
        _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_21__["AdminLoginComponent"],
        _components_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_22__["AdminComponent"],
        _components_admin_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_23__["AdminListComponent"],
        _components_admin_cheque_requests_cheque_requests_component__WEBPACK_IMPORTED_MODULE_24__["ChequeRequestsComponent"],
        _components_admin_transaction_requests_transaction_requests_component__WEBPACK_IMPORTED_MODULE_25__["TransactionRequestsComponent"],
        _components_admin_admin_block_accounts_admin_block_accounts_component__WEBPACK_IMPORTED_MODULE_26__["AdminBlockAccountsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"]] }); })();


/***/ }),

/***/ "d8Xf":
/*!************************************************************************!*\
  !*** ./src/app/components/bank/transactions/transactions.component.ts ***!
  \************************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/current-user/data.service */ "xHqQ");
/* harmony import */ var src_app_services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/transactions/transactions.service */ "7caK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function TransactionsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transaction_r3["id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.generateDate(transaction_r3["transferDate"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.generateRemarks(transaction_r3["fromAccountNumber"], transaction_r3["toAccountNumber"], transaction_r3["fromAccountHolderName"], transaction_r3["toAccountHolderName"], transaction_r3["fromAccountType"], transaction_r3["toAccountType"], transaction_r3["transferMessage"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r0.amountColor, " font-weight-bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx_r0.generateTransferAmount(transaction_r3["transferAmount"], transaction_r3["fromAccountNumber"], transaction_r3["toAccountNumber"]), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.generateStatus(transaction_r3["transferStatus"]));
} }
function TransactionsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsComponent_ng_template_25_Template_button_click_3_listener() { const modal_r4 = ctx.$implicit; return modal_r4.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionsComponent_ng_template_25_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionsComponent_ng_template_25_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.endDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsComponent_ng_template_25_Template_button_click_19_listener() { const modal_r4 = ctx.$implicit; return modal_r4.close("Clear Filter"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Clear Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsComponent_ng_template_25_Template_button_click_21_listener() { const modal_r4 = ctx.$implicit; return modal_r4.close("Filter"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.endDate);
} }
class TransactionsComponent {
    constructor(dataService, transactionsService, modalService) {
        this.dataService = dataService;
        this.transactionsService = transactionsService;
        this.modalService = modalService;
        this.allowBack = false;
        this.allowNext = false;
        this.amountColor = '';
        this.startDate = null;
        this.endDate = null;
    }
    ngOnInit() {
        this.transactionsService.getTransactions(this.dataService.getUser().accountNumber)
            .subscribe(transactions => {
            if (transactions.length > 5) {
                this.allowNext = true;
            }
            this.transactions = transactions;
            this.current = 0;
            this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
        }, error => console.log(error));
    }
    onPrev() {
        this.allowNext = true;
        this.current = this.current - 5;
        this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
        if (this.current - 5 < 0) {
            this.allowBack = false;
        }
        else {
            this.allowBack = true;
        }
    }
    onNext() {
        this.allowBack = true;
        this.current = this.current + 5;
        this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
        if (this.current + 5 >= this.transactions.length) {
            this.allowNext = false;
        }
        else {
            this.allowNext = true;
        }
    }
    generateDate(date) {
        let myDate = `${date}`.slice(0, 10);
        return myDate;
    }
    generateStatus(code) {
        if (code === 1) {
            return 'Success';
        }
        return 'Pending';
    }
    checkSelf(accountNumber) {
        if (this.dataService.getUser().accountNumber === accountNumber) {
            return 'Self';
        }
        return accountNumber;
    }
    generateRemarks(fromAN, toAN, from, to, fromAT, toAT, message) {
        let type = this.generateType(fromAN, toAN);
        if (type === 'Debit') {
            this.amountColor = 'text-danger';
            return `from:${fromAT}/to:${to}/mess:${message}`;
        }
        else if (type === 'Credit') {
            this.amountColor = 'text-success';
            return `from:${from}/to:${toAT}/mess:${message}`;
        }
        this.amountColor = '';
        return `from:${fromAT}/to:${toAT}/self-transfer/mess:${message}`;
    }
    generateTransferAmount(amount, from, to) {
        let type = this.generateType(from, to);
        if (type === 'Debit') {
            return `${amount} (Dr)`;
        }
        else if (type === 'Credit') {
            return `${amount} (Cr)`;
        }
        return `${amount}`;
    }
    generateType(from, to) {
        let curr_acc = this.dataService.getUser().accountNumber;
        if (to === curr_acc && from === curr_acc) {
            return '-';
        }
        if (to === curr_acc) {
            return 'Credit';
        }
        return 'Debit';
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            console.log(result);
            if (result === 'Filter') {
                if (!(this.startDate === null || this.endDate === null)) {
                    this.transactionsService
                        .getFilteredTransactions(this.dataService.getUser().accountNumber, this.startDate, this.endDate).subscribe(transactions => {
                        if (transactions.length > 5) {
                            this.allowNext = true;
                        }
                        this.transactions = transactions;
                        this.current = 0;
                        this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
                    }, error => console.log(error));
                }
            }
            else {
                this.startDate = null;
                this.endDate = null;
                this.transactionsService.getTransactions(this.dataService.getUser().accountNumber)
                    .subscribe(transactions => {
                    if (transactions.length > 5) {
                        this.allowNext = true;
                    }
                    this.transactions = transactions;
                    this.current = 0;
                    this.toShowTransactions = this.transactions.slice(this.current, this.current + 5);
                }, error => console.log(error));
            }
        }, (reason) => {
        });
    }
}
TransactionsComponent.ɵfac = function TransactionsComponent_Factory(t) { return new (t || TransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_2__["TransactionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
TransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionsComponent, selectors: [["app-transactions"]], decls: 27, vars: 3, consts: [[1, "myContainer"], [1, "row", "pt-3", "align-items-center"], [1, "col-md-12", "col-lg-12", "mb-3"], [1, "btn", "btn-outline-dark", 3, "click"], [1, "fas", "fa-filter"], [1, "col-md-12", "col-lg-12", "ml-auto"], [1, "table"], [1, "table-active"], ["scope", "col", 1, "border-right"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-12", "d-flex", "flex-row", "justify-content-end", "pr-5", "pt-3"], [1, "btn", "btn-primary", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["content", ""], ["scope", "row", 1, "border-right"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "dateOfBirth"], [1, "input-group"], ["id", "startDate", "type", "date", "placeholder", "dd/mm/yyyy", "name", "startDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "endDate", "type", "date", "placeholder", "dd/mm/yyyy", "name", "endDate", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function TransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx.open(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tran #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tran Amount (INR)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tran Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TransactionsComponent_tr_19_Template, 11, 8, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsComponent_Template_button_click_21_listener() { return ctx.onPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionsComponent_Template_button_click_23_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TransactionsComponent_ng_template_25_Template, 23, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toShowTransactions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowBack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowNext);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".myContainer[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n    margin-left: 7%;\r\n    margin-right: 7%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoidHJhbnNhY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlDb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "g4ui":
/*!************************************************************************!*\
  !*** ./src/app/components/auth/registration/registration.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/users/user-service.service */ "DiSl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");





class RegistrationComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.firstName = '';
        this.lastName = '';
        this.accountNumber = '';
        this.loginUserID = '';
        this.loginUserPassword1 = '';
        this.loginUserPassword2 = '';
    }
    ngOnInit() {
    }
    generateID() {
        if (this.firstName === '' ||
            this.lastName === '' ||
            this.accountNumber === '') {
            alert('Please Enter Above Credentials');
            return;
        }
        let temp = this.firstName + this.lastName + this.accountNumber;
        let result = [];
        for (let i = 0; i < 8; i++) {
            result.push(temp.charAt(Math.floor(Math.random() * temp.length)));
        }
        this.loginUserID = result.join('');
    }
    register() {
        if (this.firstName === '' ||
            this.lastName === '' ||
            this.accountNumber === '' ||
            this.loginUserID === '' ||
            this.loginUserPassword1 === '' || this.loginUserPassword2 === '') {
            alert('Please Enter Above Credentials!');
            return;
        }
        if (!(this.loginUserPassword1 === this.loginUserPassword2)) {
            alert('Entered login passwords do not match!');
            return;
        }
        let user = {
            accountNumber: this.accountNumber,
            accountHolderName: this.firstName + ' ' + this.lastName,
            accountLoginUserId: this.loginUserID,
            accountLoginPassword: this.loginUserPassword1,
            accountIsBlocked: 0
        };
        this.userService.putUser(user).subscribe(message => {
            if (message.message === 'Successfully registered!') {
                let mySuccessMessage = message.message + '\n' + 'Press OK to login and enjoy the services.';
                if (confirm(mySuccessMessage)) {
                    this.router.navigate(['login']);
                }
            }
            else {
                alert(message.message);
            }
        }, error => console.log(error), () => {
            this.accountNumber = '';
            this.firstName = '';
            this.lastName = '';
            this.loginUserID = '';
            this.loginUserPassword1 = '';
            this.loginUserPassword2 = '';
        });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_user_service_service__WEBPACK_IMPORTED_MODULE_1__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 65, vars: 6, consts: [[1, "container", "myDiv"], [1, "row", "py-5", "align-items-center"], [1, "col-md-5", "pr-lg-5", "mb-5", "mb-md-0", "text-center"], ["src", "https://raw.githubusercontent.com/mRahulJain/TEKsystemsGS/dd8f954be7523fa05f8ff2e8a669a2c1c5be3807/Capstone/frontend/icin-bank/src/assets/svgRegister.svg", "alt", "", 1, "img-fluid", "mb-3", "d-none", "d-md-block"], [1, "display-3"], [1, "col-md-7", "col-lg-6", "ml-auto"], [1, "row"], [1, "col-lg-12", "text-center", "mb-3"], [1, "display-4"], [1, "input-group", "col-lg-6", "mb-4"], [1, "input-group-prepend"], [1, "input-group-text", "bg-white", "px-4", "border-md", "border-right-0"], [1, "fa", "fa-user", "text-muted"], ["id", "firstName", "type", "text", "name", "firstname", "placeholder", "First Name", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], ["id", "lastName", "type", "text", "name", "lastname", "placeholder", "Last Name", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "input-group", "col-lg-12", "mb-4"], [1, "fab", "fa-500px", "text-muted"], ["id", "accountNumber", "type", "text", "name", "accountNumber", "placeholder", "Account Number", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-lg-12", "mb-0", 3, "click"], [1, "btn", "btn-success", "btn-block", "py-2"], [1, "font-weight-bold", "text-white"], ["id", "userIdHelp", 1, "form-text", "text-muted", "col-lg-12"], [1, "fas", "fa-id-card-alt", "text-muted"], ["id", "loginUserId", "type", "text", "name", "loginUserId", "placeholder", "Login User ID", "readonly", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "value"], [1, "fa", "fa-lock", "text-muted"], ["id", "password", "type", "password", "name", "password", "placeholder", "Login Password", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], ["id", "passwordConfirmation", "type", "password", "name", "passwordConfirmation", "placeholder", "Confirm Password", "required", "", 1, "form-control", "bg-white", "border-left-0", "border-md", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-lg-12", "mx-auto", "mb-0", 3, "click"], [1, "btn", "btn-primary", "btn-block", "py-2"], [1, "form-group", "col-lg-12", "mx-auto", "d-flex", "align-items-center", "my-4"], [1, "border-bottom", "w-100", "ml-5"], [1, "px-2", "small", "text-muted", "font-weight-bold", "text-muted"], [1, "border-bottom", "w-100", "mr-5"], [1, "text-center", "w-100"], [1, "text-muted", "font-weight-bold"], ["routerLink", "/login", 1, "text-primary", "ml-2"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICIN Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "--------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_18_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_23_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_28_listener($event) { return ctx.accountNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_div_click_29_listener() { return ctx.generateID(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Generate User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Remeber your Login User ID. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_44_listener($event) { return ctx.loginUserPassword1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_49_listener($event) { return ctx.loginUserPassword2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_div_click_50_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Register Your Account For Net Banking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Already Registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.accountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.loginUserID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserPassword1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserPassword2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 110vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teURpdiB7XHJcbiAgICBoZWlnaHQ6IDExMHZoO1xyXG59Il19 */"] });


/***/ }),

/***/ "rJbn":
/*!************************************************************************!*\
  !*** ./src/app/components/bank/cheque-books/cheque-books.component.ts ***!
  \************************************************************************/
/*! exports provided: ChequeBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequeBooksComponent", function() { return ChequeBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/current-user/data.service */ "xHqQ");
/* harmony import */ var _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/users/user-service.service */ "DiSl");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ChequeBooksComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chequeBook_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chequeBook_r3["chequeBookNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chequeBook_r3["accountNumber"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chequeBook_r3["accountType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.generateDate(chequeBook_r3["chequeBookIssueDate"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.generateStatus(chequeBook_r3["chequeBookStatus"]));
} }
function ChequeBooksComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Cheque Book Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeBooksComponent_ng_template_24_Template_button_click_3_listener() { const modal_r4 = ctx.$implicit; return modal_r4.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeBooksComponent_ng_template_24_Template_button_click_7_listener() { const modal_r4 = ctx.$implicit; return modal_r4.close("Primary"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "For Primary Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeBooksComponent_ng_template_24_Template_button_click_9_listener() { const modal_r4 = ctx.$implicit; return modal_r4.close("Savings"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "For Savings Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChequeBooksComponent {
    constructor(dataService, userService, modalService) {
        this.dataService = dataService;
        this.userService = userService;
        this.modalService = modalService;
        this.allowBack = false;
        this.allowNext = false;
    }
    ngOnInit() {
        this.userService.getChequeBooks(this.dataService.getUser().accountNumber)
            .subscribe(chequeBooks => {
            if (chequeBooks.length > 5) {
                this.allowNext = true;
            }
            this.chequeBooks = chequeBooks;
            this.current = 0;
            this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
        }, error => console.log(error));
    }
    onPrev() {
        this.allowNext = true;
        this.current = this.current - 5;
        this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
        if (this.current - 5 < 0) {
            this.allowBack = false;
        }
        else {
            this.allowBack = true;
        }
    }
    onNext() {
        this.allowBack = true;
        this.current = this.current + 5;
        this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
        if (this.current + 5 >= this.chequeBooks.length) {
            this.allowNext = false;
        }
        else {
            this.allowNext = true;
        }
    }
    generateDate(date) {
        let myDate = `${date}`.slice(0, 10);
        return myDate;
    }
    generateStatus(code) {
        if (code === 1) {
            return 'Success';
        }
        return 'Pending';
    }
    requestChequeBookPrimary() {
        this.userService.requestChequeBook(this.dataService.getUser().accountNumber, 'Primary')
            .subscribe(message => {
            alert(message.message);
            this.userService.getChequeBooks(this.dataService.getUser().accountNumber)
                .subscribe(chequeBooks => {
                if (chequeBooks.length > 5) {
                    this.allowNext = true;
                }
                this.chequeBooks = chequeBooks;
                this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
            }, error => console.log(error));
        }, error => console.log(error));
    }
    requestChequeBookSavings() {
        this.userService.requestChequeBook(this.dataService.getUser().accountNumber, 'Savings')
            .subscribe(message => {
            alert(message.message);
            this.userService.getChequeBooks(this.dataService.getUser().accountNumber)
                .subscribe(chequeBooks => {
                if (chequeBooks.length > 5) {
                    this.allowNext = true;
                }
                this.chequeBooks = chequeBooks;
                this.toShowChequeBooks = this.chequeBooks.slice(this.current, this.current + 5);
            }, error => console.log(error));
        }, error => console.log(error));
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            console.log(result);
            if (result === 'Primary') {
                this.requestChequeBookPrimary();
            }
            else {
                this.requestChequeBookSavings();
            }
        }, (reason) => {
        });
    }
}
ChequeBooksComponent.ɵfac = function ChequeBooksComponent_Factory(t) { return new (t || ChequeBooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_user_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"])); };
ChequeBooksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChequeBooksComponent, selectors: [["app-cheque-books"]], decls: 26, vars: 3, consts: [[1, "myContainer"], [1, "row", "pt-3", "align-items-center"], [1, "col-md-12", "col-lg-12", "mb-3"], [1, "btn", "btn-outline-dark", 3, "click"], [1, "col-md-12", "col-lg-12", "ml-auto"], [1, "table"], [1, "table-active"], ["scope", "col", 1, "border-right"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-lg-12", "d-flex", "flex-row", "justify-content-end", "pr-5", "pt-5"], [1, "btn", "btn-primary", "mr-2", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["content", ""], ["scope", "row", 1, "border-right"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "button", 1, "btn", "btn-outline-dark", "col-12", "mb-3", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", "col-12", 3, "click"]], template: function ChequeBooksComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeBooksComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.open(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Request Cheque Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cheque Book Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Account Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cheque Book Issue Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cheque Book Issue Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChequeBooksComponent_tr_18_Template, 11, 5, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeBooksComponent_Template_button_click_20_listener() { return ctx.onPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChequeBooksComponent_Template_button_click_22_listener() { return ctx.onNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChequeBooksComponent_ng_template_24_Template, 11, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toShowChequeBooks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowBack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowNext);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".myContainer[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n    margin-left: 7%;\r\n    margin-right: 7%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXF1ZS1ib29rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiY2hlcXVlLWJvb2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlDb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "t/Q3":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/admin-list/admin-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListComponent", function() { return AdminListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_current_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/current-admin/admin-data.service */ "DPrs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AdminListComponent {
    constructor(router, adminDataService) {
        this.router = router;
        this.adminDataService = adminDataService;
    }
    ngOnInit() {
    }
    seeBlockedAccounts() {
        this.router.navigate(['admin/blocked-accounts']);
    }
    seeChequeBooks() {
        this.router.navigate(['admin/cheque-requests']);
    }
    seeTransactions() {
        this.router.navigate(['admin/transaction-requests']);
    }
    onLogout() {
        this.adminDataService.setIsSafe(false);
        this.router.navigate(['admin/login']);
    }
}
AdminListComponent.ɵfac = function AdminListComponent_Factory(t) { return new (t || AdminListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_2__["AdminDataService"])); };
AdminListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminListComponent, selectors: [["app-admin-list"]], decls: 30, vars: 0, consts: [[1, "container"], [1, "row", "py-5", "mt-4", "align-items-center", "myDiv"], [1, "col-md-5", "pr-lg-5", "mb-5", "mb-md-0", "text-center"], ["src", "https://raw.githubusercontent.com/mRahulJain/TEKsystemsGS/dd8f954be7523fa05f8ff2e8a669a2c1c5be3807/Capstone/frontend/icin-bank/src/assets/svgSecure.svg", "alt", "", 1, "img-fluid", "mb-3", "d-none", "d-md-block"], [1, "font-italic", "text-muted", "display-5", "font-weight-bold"], [1, "col-md-7", "col-lg-6", "ml-auto"], ["action", "#"], [1, "row"], [1, "col-lg-12", "text-center", "mb-3"], [1, "display-4"], [1, "form-group", "col-lg-12", "mx-auto", "mb-0", "mb-3"], [1, "btn", "btn-primary", "btn-block", "py-2", 3, "click"], [1, "font-weight-bold", "text-white"], [1, "form-group", "col-lg-12", "mx-auto", "mb-0mb-3"], [1, "btn", "btn-danger", "btn-block", "py-2", 3, "click"]], template: function AdminListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICINadmin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select your choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "----------------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminListComponent_Template_a_click_15_listener() { return ctx.seeBlockedAccounts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "See Blocked Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminListComponent_Template_a_click_19_listener() { return ctx.seeChequeBooks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "See Cheque Book Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminListComponent_Template_a_click_23_listener() { return ctx.seeTransactions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "See Transaction Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminListComponent_Template_a_click_27_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".myDiv[_ngcontent-%COMP%] {\r\n    height: 84vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiYWRtaW4tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15RGl2IHtcclxuICAgIGhlaWdodDogODR2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_admin_admin_block_accounts_admin_block_accounts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin/admin-block-accounts/admin-block-accounts.component */ "FdAr");
/* harmony import */ var _services_admin_routing_services_admin_routing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/admin-routing-services/admin-routing.service */ "GCgJ");
/* harmony import */ var _components_admin_transaction_requests_transaction_requests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/transaction-requests/transaction-requests.component */ "KRP+");
/* harmony import */ var _components_admin_cheque_requests_cheque_requests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/cheque-requests/cheque-requests.component */ "Who0");
/* harmony import */ var _components_admin_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/admin-list/admin-list.component */ "t/Q3");
/* harmony import */ var _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/admin-login/admin-login.component */ "3lyW");
/* harmony import */ var _components_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/admin/admin.component */ "A2s4");
/* harmony import */ var _components_bank_cheque_books_cheque_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bank/cheque-books/cheque-books.component */ "rJbn");
/* harmony import */ var _components_bank_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bank/transactions/transactions.component */ "d8Xf");
/* harmony import */ var _services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/transactions/transactions.service */ "7caK");
/* harmony import */ var _components_bank_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bank/transfer/transfer.component */ "3DTq");
/* harmony import */ var _components_bank_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/bank/accounts/accounts.component */ "Ctv9");
/* harmony import */ var _components_bank_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bank/profile/profile.component */ "8n4u");
/* harmony import */ var _services_routing_service_user_routing_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/routing-service/user-routing.service */ "3cTk");
/* harmony import */ var _components_bank_bank_bank_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/bank/bank/bank.component */ "YtXh");
/* harmony import */ var _components_bank_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/bank/home/home.component */ "HyyY");
/* harmony import */ var _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/users/user-service.service */ "DiSl");
/* harmony import */ var _components_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/auth/registration/registration.component */ "g4ui");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/auth/login/login.component */ "HzFZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/current-user/data.service */ "xHqQ");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/account/account.service */ "IRyT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");
























const routes = [
    { path: 'login', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
    { path: 'register', component: _components_auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationComponent"] },
    { path: 'bank', component: _components_bank_bank_bank_component__WEBPACK_IMPORTED_MODULE_14__["BankComponent"], canActivateChild: [_services_routing_service_user_routing_service__WEBPACK_IMPORTED_MODULE_13__["UserRoutingService"]],
        children: [
            { path: 'home', component: _components_bank_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
            { path: 'profile', component: _components_bank_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"] },
            { path: 'accounts', component: _components_bank_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_11__["AccountsComponent"] },
            { path: 'transfer', component: _components_bank_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_10__["TransferComponent"] },
            { path: 'transactions', component: _components_bank_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_8__["TransactionsComponent"] },
            { path: 'cheque-books', component: _components_bank_cheque_books_cheque_books_component__WEBPACK_IMPORTED_MODULE_7__["ChequeBooksComponent"] },
            { path: '**', component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] }
        ] },
    { path: 'admin', component: _components_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], canActivateChild: [_services_admin_routing_services_admin_routing_service__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingService"]],
        children: [
            { path: 'login', component: _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"] },
            { path: 'options', component: _components_admin_admin_list_admin_list_component__WEBPACK_IMPORTED_MODULE_4__["AdminListComponent"] },
            { path: 'blocked-accounts', component: _components_admin_admin_block_accounts_admin_block_accounts_component__WEBPACK_IMPORTED_MODULE_0__["AdminBlockAccountsComponent"] },
            { path: 'cheque-requests', component: _components_admin_cheque_requests_cheque_requests_component__WEBPACK_IMPORTED_MODULE_3__["ChequeRequestsComponent"] },
            { path: 'transaction-requests', component: _components_admin_transaction_requests_transaction_requests_component__WEBPACK_IMPORTED_MODULE_2__["TransactionRequestsComponent"] },
            { path: '**', component: _components_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"] }
        ] },
    { path: '**', redirectTo: '/login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [
        _services_users_user_service_service__WEBPACK_IMPORTED_MODULE_16__["UserServiceService"],
        _services_current_user_data_service__WEBPACK_IMPORTED_MODULE_20__["DataService"],
        _services_routing_service_user_routing_service__WEBPACK_IMPORTED_MODULE_13__["UserRoutingService"],
        _services_account_account_service__WEBPACK_IMPORTED_MODULE_21__["AccountService"],
        _services_transactions_transactions_service__WEBPACK_IMPORTED_MODULE_9__["TransactionsService"],
        _services_admin_routing_services_admin_routing_service__WEBPACK_IMPORTED_MODULE_1__["AdminRoutingService"]
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]] }); })();


/***/ }),

/***/ "xHqQ":
/*!*******************************************************!*\
  !*** ./src/app/services/current-user/data.service.ts ***!
  \*******************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataService {
    constructor() {
        this.user = null;
        this.isSafe = false;
    }
    getUser() {
        return this.user;
    }
    setUser(user) {
        this.user = user;
    }
    getIsSafe() {
        return this.isSafe;
    }
    setIsSafe(isSafe) {
        this.isSafe = isSafe;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map