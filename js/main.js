var apiKey    = "44950832"; 
var sessionId = "2_MX40NDk1MDgzMn5-VHVlIEF1ZyAxOSAxNDoxOTo1NiBQRFQgMjAxNH4wLjAzOTk5OTU0NX5-"; 
var token     = "T1==cGFydG5lcl9pZD00NDk1MDgzMiZzaWc9ZGQ1NDQxMjk3YjBhMWY2MjhkNTJlNDA0MDAwMzhhMzY4Y2I1MWI0OTpyb2xlPXN1YnNjcmliZXImc2Vzc2lvbl9pZD0yX01YNDBORGsxTURnek1uNS1WSFZsSUVGMVp5QXhPU0F4TkRveE9UbzFOaUJRUkZRZ01qQXhOSDR3TGpBek9UazVPVFUwTlg1LSZjcmVhdGVfdGltZT0xNDA4NDgzMjI4Jm5vbmNlPTAuMjM4NTYyOTUwMjg5MzkyNjcmZXhwaXJlX3RpbWU9MTQxMTA3NTE3NQ=="; 
   
   var session = OT.initSession(apiKey, sessionId); 
   
   session.on("streamCreated", function(event) { 
     session.subscribe(event.stream); 
  }); 

 
  
   session.connect(token, function(error) { 
     var publisher = OT.initPublisher(); 
    session.publish(publisher); 
  }); 
 
