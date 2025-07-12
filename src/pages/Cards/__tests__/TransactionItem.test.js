"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
require("@testing-library/jest-dom");
var TransactionItem_1 = __importDefault(require("../TransactionItem"));
describe('TransactionItem', function () {
    it('renders merchant, amount, date, and description correctly for a credit', function () {
        var transaction = {
            id: '1',
            cardId: '1',
            merchant: 'Test Merchant',
            amount: 100,
            currency: 'S$',
            title: 'Refund on debit card',
            type: 'credit',
            date: '2023-01-01',
            description: 'Refund on debit card',
            category: 'refund',
            direction: 'in',
        };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(TransactionItem_1.default, { transaction: transaction }));
        expect(react_1.screen.getByText('Test Merchant')).toBeInTheDocument();
        expect(react_1.screen.getByText('+ S$ 100')).toBeInTheDocument();
        expect(react_1.screen.getByText('01 Jan 2023')).toBeInTheDocument();
        expect(react_1.screen.getByText('Refund on debit card')).toBeInTheDocument();
    });
    it('renders merchant, amount, date, and description correctly for a debit', function () {
        var transaction = {
            id: '2',
            cardId: '1',
            merchant: 'Coffee Shop',
            amount: 50,
            currency: 'S$',
            title: 'Coffee',
            type: 'debit',
            date: '2023-02-01',
            description: 'Morning coffee',
            category: 'shopping',
            direction: 'out',
        };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(TransactionItem_1.default, { transaction: transaction }));
        expect(react_1.screen.getByText('Coffee Shop')).toBeInTheDocument();
        expect(react_1.screen.getByText('- S$ 50')).toBeInTheDocument();
        expect(react_1.screen.getByText('01 Feb 2023')).toBeInTheDocument();
        expect(react_1.screen.getByText('Morning coffee')).toBeInTheDocument();
    });
});
