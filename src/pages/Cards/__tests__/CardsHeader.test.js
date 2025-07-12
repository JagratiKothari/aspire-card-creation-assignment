"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var CardsHeader_1 = require("../CardsHeader");
describe('CardsHeader', function () {
    it('renders balance and add card button, opens modal', function () {
        var onAddCard = jest.fn();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(CardsHeader_1.CardsHeader, { onAddCard: onAddCard }));
        expect(react_1.screen.getByText(/Available balance/i)).toBeInTheDocument();
        expect(react_1.screen.getByText(/New card/i)).toBeInTheDocument();
        react_1.fireEvent.click(react_1.screen.getByText(/New card/i));
        expect(react_1.screen.getByPlaceholderText(/Enter card name/i)).toBeInTheDocument();
    });
});
