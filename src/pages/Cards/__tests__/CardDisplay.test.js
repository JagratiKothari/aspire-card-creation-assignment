"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var CardDisplay_1 = require("../CardDisplay");
var cards = [
    {
        id: '1',
        name: 'Test Card',
        numberMasked: '•••• •••• •••• 1234',
        numberUnmasked: '1234 5678 9012 1234',
        cvvUnmasked: '123',
        expiry: '12/30',
        cvvMasked: '***',
        vendor: 'VISA',
        isFrozen: false,
    },
];
describe('CardDisplay', function () {
    it('renders CardCarousel and CardDetails/Transactions', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(CardDisplay_1.CardDisplay, { cards: cards, onToggleFreeze: function () { } }));
        expect(react_1.screen.getByText('Test Card')).toBeInTheDocument();
        expect(react_1.screen.getByText(/Card details/i)).toBeInTheDocument();
        expect(react_1.screen.getByText(/Recent transactions/i)).toBeInTheDocument();
    });
});
