const Web = require( "webwebweb" );
Web.APIs[ "/countdown" ] = ( qs, body, opts ) => {
  const christmas = new Date( "December 25, 2021 00:00:00" );
  const today = new Date();
  const diff = christmas - today;
  const days = Math.floor( diff / ( 24 * 60 * 60_000 ) );
  const hours = Math.floor( diff / ( 60 * 60_000 ) ) - ( days * 24 );
  const mins = Math.floor( diff / ( 60_000 ) ) - ( days * 24 * 60 + hours * 60 );
  const secs = Math.floor( diff / ( 1_000 ) ) - ( days * 24 * 60 * 60 + hours * 60 * 60 + mins * 60 );
  const mills = diff - ( days * 24 * 60 * 60_000 + hours * 60 * 60_000 + mins * 60_000 + secs * 1_000 );
  return {
    christmas,
    today,
    timeUntilMS: diff,
    timeUntilS: diff / 1_000,
    timeUntilM: diff / 60_000,
    timeUntilH: diff / ( 60 * 60_000 ),
    timeUntilD: diff / ( 24 * 60 * 60_000 ),
    days, hours, mins, secs, mills,
  };
};
Web.Run( 8080 );
