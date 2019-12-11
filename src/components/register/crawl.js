//PART 1
var emails = [];
function pushLinks(links) {
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.includes("mailto:")) {
      let emailAddress = links[i].href.split("mailto:");
      console.log(emailAddress[1]);
      emails.push(emailAddress[1]);
    }
  }
}

var windows = [];
for (let i = 150; i < 200; i++) {
  windows.push(
    window.open(
      `https://www.f4cp.org/package/finddoctorbycity?drname=&city=a&office_state=NV&page=${i}`,
      `mypopup${i}`,
      "width=500,height=300"
    )
  );
}


//Part Two
windows.forEach(async w => {
  const links = await w.document.querySelectorAll("a")
  await pushLinks(links);
  w.close()
});

console.log(emails);
