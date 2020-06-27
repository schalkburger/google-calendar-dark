@-moz-document url-prefix("https://calendar.google.com/calendar/") {

    /* Globals  */

    body {
        background-color: #21252c;
        color: #e8eaed;
        direction: ltr;
        font-family: 'Roboto', arial, sans-serif;
        font-size: 15px;
        margin: 0;
        min-width: 360px;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0;
    }

    /* Header */

    header {
        background-color: #21252c !important;
    }

    body[data-viewfamily=EVENT] .SGWAac, body[data-viewfamily=SCHEDULE] .SGWAac, body[data-viewfamily=SEARCH] .SGWAac, body[data-viewfamily=SETTINGS] .SGWAac, body[data-viewfamily=TRASH] .SGWAac {
        border: none !important;
    }

    /* Text colours */

    .gb_sa svg, .gb_Fc svg, .gb_8c .gb_le, .gb_Rc .gb_le, .GXlaye .snByac, div.rF3YF svg, div.rF3YF span, div.rF3YF svg, div.rF3YF span, .rSoRzd, .HLI7qf .c7fp5b, .OWyNBb.m1fiJb, .uQ1ixe .snByac, .Cd9hpd .snByac, .u5sQsb, .r4nke {
        color: rgba(255,255,255, .87 ) !important;
        fill: rgba(255,255,255, .87 ) !important;
    }

    /* Calendar Sidebar */

    .OWyNBb.m1fiJb, .W0m3G .r4nke, .W0m3G::before {
        background-color: transparent !important;
    }

    .hEtGGf::after {
        background-image: none !important;
    }

    .SaBhMc {
        background-color: #282c35;
        color: #fff !important;
    }

    .IIB0tc .ULpymb {
        background-color: #282c35;
    }

    /* Calendar Main */

    .v83gc, .GENA3c, .Gk2izd, ::-webkit-scrollbar-thumb {
        background-color: #282c35;
    }

    .YvjgZe, .CIFHgc, .MVMVEe, .jRJqje::-webkit-scrollbar-thumb {
        border-color: #4c4c4c !important;
    }

    .hnGhZ::-webkit-scrollbar-thumb {
        border-bottom: 1px solid white;
        border-left: 1px solid white;
        border-right: 1px solid white;
        border-top: 1px solid white;
    }

    /* .j0nwNb .eh5oYe .eADW5d {
        background-color: #101114;
    } */

    /* Far Right Sidebar */

    body[data-viewfamily=EVENT] .gboEAb, body[data-viewfamily=SEARCH] .gboEAb, body[data-viewfamily=EVENT_EDIT] .gboEAb {
        display: none;
    }

}