"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var CardDetails_1 = require("../CardDetails");
describe('CardDetails', function () {
    it('renders the accordion with icon and title', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(CardDetails_1.CardDetails, {}));
        expect(react_1.screen.getByText(/Card details/i)).toBeInTheDocument();
        expect(react_1.screen.getByAltText(/card_details_icon/i)).toBeInTheDocument();
    });
});
