"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var CardCarousel_1 = require("../CardCarousel");
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
describe('CardCarousel', function () {
    it('renders card and toggles freeze', function () {
        var onSlideChange = jest.fn();
        var onToggleFreeze = jest.fn();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(CardCarousel_1.CardCarousel, { cards: cards, selectedIndex: 0, onSlideChange: onSlideChange, onToggleFreeze: onToggleFreeze }));
        expect(react_1.screen.getByText('Test Card')).toBeInTheDocument();
        react_1.fireEvent.click(react_1.screen.getByText(/Freeze card/i));
        expect(onToggleFreeze).toHaveBeenCalled();
    });
});
