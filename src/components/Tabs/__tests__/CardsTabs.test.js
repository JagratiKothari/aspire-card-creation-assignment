"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var index_1 = __importDefault(require("../index"));
describe('CardsTabs', function () {
    it('renders tabs and switches active tab', function () {
        var setActiveTab = jest.fn();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(index_1.default, { activeTab: "MY_DEBIT_CARDS", setActiveTab: setActiveTab }));
        expect(react_1.screen.getByText(/My debit cards/i)).toBeInTheDocument();
        expect(react_1.screen.getByText(/All company cards/i)).toBeInTheDocument();
        react_1.fireEvent.click(react_1.screen.getByText(/All company cards/i));
        expect(setActiveTab).toHaveBeenCalledWith('COMPANY_CARDS');
    });
});
