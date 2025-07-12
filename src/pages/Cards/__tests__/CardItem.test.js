"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var CardItem_1 = require("../CardItem");
var card = {
    id: '1',
    name: 'Test Card',
    numberMasked: '•••• •••• •••• 1234',
    numberUnmasked: '1234 5678 9012 1234',
    cvvUnmasked: '123',
    expiry: '12/30',
    cvvMasked: '***',
    vendor: 'VISA',
    isFrozen: false,
};
describe('CardItem', function () {
    it('renders cardholder name and masked/unmasked number', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(CardItem_1.CardItem, { card: card, showNumber: false }));
        expect(react_1.screen.getByText('Test Card')).toBeInTheDocument();
        expect(react_1.screen.getByText(card.numberMasked)).toBeInTheDocument();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(CardItem_1.CardItem, { card: card, showNumber: true }));
        expect(react_1.screen.getByText(card.numberUnmasked)).toBeInTheDocument();
    });
});
