// + ---------------------------------------------------- FUNCIONES UTILES -- +
// | Realizado: Lun, 12 Oct 2015 15:43:16                                     |
// | Por: Oswaldo Rojas                                                       |
// + ------------------------------------------------------------------------ +
/**
    dateFormat (new Date(), "%Y-%m-%d %H:%M:%S", true) returns 
   "2012-05-18 05:37:21"
**/
exports.dateFormat = function (date, fstr, utc) {
    utc = utc ? 'getUTC' : 'get';
    return fstr.replace (/%[YmdHMS]/g, function (m) {
        switch (m) {
            case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
            case '%m': m = 1 + date[utc + 'Month'] (); break;
            case '%d': m = date[utc + 'Date'] (); break;
            case '%H': m = date[utc + 'Hours'] (); break;
            case '%M': m = date[utc + 'Minutes'] (); break;
            case '%S': m = date[utc + 'Seconds'] (); break;
            default: return m.slice (1); // unknown code, remove %
        }
        // add leading zero if required
        return ('0' + m).slice (-2);
    });
}
// + ------------------------------------------------------------------------ +

exports.dtshort = function (date) {
    return this.dateFormat(date, "%Y-%m-%d %H:%M:%S");
}