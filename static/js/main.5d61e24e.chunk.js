(this["webpackJsonpcolor-note"]=this["webpackJsonpcolor-note"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),o=n.n(i),r=(n(12),n(5)),s=n(2),A=(n(13),n(14),n(15),n(0));var l=function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"notes",style:{backgroundColor:e.note.color},children:[Object(A.jsx)("textarea",{className:"notes_text",defaultValue:e.note.text,onChange:function(t){return n=t.target.value,c=e.note.id,void e.updateText(n,c);var n,c}}),Object(A.jsxs)("div",{className:"note_footer",children:[Object(A.jsxs)("p",{className:"notes_date",children:[function(e){if(!e)return"";var t=new Date(e),n=t.getDate(),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return"".concat(n,"  ").concat(c)}(e.note.time)+" , ",Object(A.jsx)("span",{className:"boldd",children:function(e){if(!e)return"";var t=new Date(e),n=t.getHours(),c=n>12?"PM":"AM";n=(n=n||"12")>12?n=12-n:n;var a=t.getMinutes();return a=a<10?"0"+a:a,"".concat(n,":").concat(a," ").concat(c," ")}(e.note.time)})]}),Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAAEGklEQVR4nO3dwWscZRjH8W+aNnqoJhWsVonS2BA9qIeAB4ViW6qCBwO99aokUnop9FD8GywNiFfxphL05kULQXoKLdSeWm0oNRVpCtok1BzcdNPDTGh2EjAzu/M+7zvP7wPvYRLePM+++9uZ2d0JAyIiIiIiIiIiIiIiItJYfdYN9MhB4ENgHNgPDNRU5z/gHnAF+BG4XVMd2aFRYAZoA+uBRxv4DjhU+6OUbU0AK4R/4otjGfio5scqBe8DLeyf/I2xRnYISk6K5wDPAb8Bg4WfzwHfADfJjtV1GCA77JwE3ir8bgkYIztHkBp9SeerrwV8YtDHJFv3Ql8Y9OHKE2w97p8x7OdsoZdl6nsHIsBxOhd8Adht2M8e4E6hp2OG/ZS2y7qBkkYK2z+RnYBZaeU9bPaKRSNVpRaAZwvbf5l00anYw36TLipKLQDF3X3bpItODwvbloek0lILgPSYAuCcAuCcAuBcah8Fj9D5VvBWPizF2JPIzoTeA+wFPgYOA08Hrh27FeAX4CvggXEvtXiD7KNb669uYx9/AK9XXONoDQJ/Yr+4qYwFAu0hQ70L+BR4MVCtJhgGpkIUChWAI4HqNMnREEVCBWBvoDpN8lSIIqEC8HugOk1yI0SRUAH4OlCdJmncmk1jf3adyjhfcY2j1gecBhaxX+BYx13gVNUFrsLiu4B+4DWyy7tT+y6iLhtP/g22XmAiIiJShxiOwZ8Db1o3YeQa2T+XmInhCtZx4F3rJoyYr78uCXNOAXBOAXBOAXBOAXCuCQFYAebJPk4t6y7V/8F0Pq+dtNQDcIns8qlR4ATlQjBNdpnaMHChxLz1vNZoPvdSibmyjVmqf3s2UfhbV0vMHdo0b6jEvF8LNSe66H+2xDrVIvU9wNL/bO90bpl597uoGZ3UAyBdUgCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcUwCcSz0Azxe2Xygx90AP5m23LSV1c8OI68AYMAB8VnLu98A+4Bngh5Jzz+U1XyW743eyN4yIQTcB2BhrFee18xGyZlQBML91aY/0V5zXzb2Tq9aMSurnANKlGALwr3UDhh5YNxBDABatGzBk/thjCMBl6wYMzVk3EIOX6M0ZdWqjRXbjSVMx7AEWgBnrJgx8C9yxbiIWLwP/YP+qDDX+JoJXf2w+AFaxf3LqHqvAez1as8Z5h8d3Am/iuAm83bPVaqgngSngItmt3at+VBvDaOeP4WdgMn9sIiIiIiIiIiIiIiIiImE8AtMmtyPmnzlWAAAAAElFTkSuQmCC",alt:"delete",onClick:function(){return e.deleteNote(e.note.id)}})]})]})})};n(17);var d=function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"searchbar",children:[Object(A.jsx)("i",{className:"fas fa-search"}),Object(A.jsx)("input",{className:"searchbar_input",placeholder:"Search",onChange:function(t){return function(t){e.searchHandler(t)}(t)}})]})})};var u=function(e){var t=function(e){for(var t=[],n=e.length-1;n>=0;n--)t.push(e[n]);return t}(e.notes);console.log("Setted Note");var n=Object(c.useState)(t),a=Object(s.a)(n,2),i=a[0],o=a[1],r=Object(c.useState)(!1),u=Object(s.a)(r,2),j=(u[0],u[1]);return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"note-container",children:[Object(A.jsx)(d,{notes:t,searchHandler:function(e){e.preventDefault(),j(!0),console.log("You Searched");var n=e.target.value.toLowerCase(),c=t.filter((function(e){var t=e.text.toLowerCase();return console.log(t.indexOf(n)),-1!==t.indexOf(n)}));o(c)}}),Object(A.jsx)("h2",{children:"My Notes"}),Object(A.jsxs)("div",{className:"note-container-notes custom-scroll",children:[console.log(i),(null===t||void 0===t?void 0:t.length)>0?t.map((function(n){return Object(A.jsx)("div",{className:"note-container-note",children:Object(A.jsx)(l,{note:n,deleteNote:function(){return c=n.id,o(t),void e.deleteNote(c);var c},updateText:function(){return c=n.text,a=n.id,o(t),void e.updateText(c,a);var c,a}})},n.id)})):Object(A.jsx)("div",{className:"note-container-note",children:Object(A.jsx)("h3",{children:"No Notes Present"})})]})]})})};n(18);var j=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:"sidebar",children:[Object(A.jsx)("h2",{children:"Notez"}),Object(A.jsx)("div",{className:"sidebar_img",children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFYUlEQVR4nO2dyW4cVRSGv3jCiBAliB02TgLYZAULJBYgIMay8gQIggCxQWJSACEhVph5kRUPAAQCkZAQT2CBBEQMuywCdgTGWLACnMQDTsdOh8VpQ6i61V3ddcfu80m/bHVXd9/6T926VXc4BYqiKIrSGTtCF6AEw8BEQ+PAAWA/cE1Dexp/AdaBs42/a8ACMAfMA2ca/9c8lr1tYgzIAHAbMNXQ3UhQbLAFnAJmG/qKyAMUij7gfuADYAW47EkrwDFgslGGnmcUeAtYwl8QirQEvAmMON3jSNkHvANsED4QWV0EPkTarK5nH/Axci4PbXwrbQIfAXudOBGYQeAIsEp4o9vV38AMcJV1VwIxhVx2hja2quaQxj9ZBpAj6xLhzbSlOtL2DVn0yQujwEnCG+hK3yPtYRIcApYJb5pr/QVMW/LMGQ8jl42hzfKlTeBxK8454Fm6q70oqzrwogX/rPIa4Y0JrZnKLlriacKbEYteqOhlZQ7Tm6epItWBxyo5WoFD9FYDXlY1Alx9jQJ/Vix4N2sZj31gg3T3TZ8tfUsHd/T97X4AOAo80MHneo0RpENy1uWPTCENV+ijLxXVgYMdOV2CIeDHCHYyNc3TRtd9O+PILwG3trG9L3ZkFBvjwPO2v3QMmVYT+mgzKUvo8pi0juXe4RMR7FTKAbmMjNNb4SakVzP0DqUekC3g5lZml2lDXkZG/5Rq9FOiV7hVIzgK/ETcQ5bZfTDVmljYRGrJUtEGrWrIk8QdjNQYBJ5otkGzGtIHLCK1JGZSqiEAvyKTxeumN5vVkEniD0aKjAH3FL3ZLCCP2C+L0qDQ26JT1hDSvX6tk+LYJbVTFsis++uRRv5/FNWQO0kjGKmyC7jD9EZRQJz1UCr/YpyWqgEJh9FjUxsyDJwjndneKbYhABeA3WSW1JlqyATpBCNlhoFbsi8WBUTxQ85rU0BiHITqVnJeaw0JS6ka0pVr6iIlN4poCsguDwVRhJzXpoDoHbo/cl6bRgJdBcTXjBBXv+Pi/ibntamG7HTww4qZUgFRAmIKyJr3UvQuq9kXTG3IKnCdgx931ceUal8WGAJiqiG5jRRnlArIeQ8FUYSV7AumgCx6KIgiLGRfMAVk3kNBFCHntQYkLBqQyMh5XTSEexZ7mUBdk+pl7waS4rblEO4FZAWp4paTGFLUFnWdfOG2LAoFHhcF5HOHBVEEo8dFXdWDSIKuFMZGUmxDziNTSbeybxTVkE3gM5cl6nE+xRAMaN79ftxNWRSaeKsLdvzT8YKdOpLZWbHLcQqCAa3Hn0eAn4l7nWFKNaSGLDP/vWiDVkO4v2FxwbvC+zQJRln2o4kDbOgiJdJrlJnksAB8UmI7pTkngF9sfdmNaPKZKlqn5BTdstOAloC3S26r5HkVByOxQ8APhD/aUtNppCvKCZNoir92dAm4ryOn2+BoBDuairyc5geArwPsXGr6BoenqiyaSLm5lpGcJl6ZRlONm1RD0ukG4UE0Gf+VqgOPVnLUAk8R3ohY9FxFL60xQ3gzQuuVyi5a5hl68/QV5SOPtjlMbzX0NeAhK845ZJreuCT+g4BXU+0ySnffPH5HQg+W3KabH73q7Q7cBQfpjsdcnMZDR6EvUn589zpd9vjuKxlDJk3EPEa/rU3gGPHPS7PCXuRcvEF447OqIQdNLttbLzACvIHM5gsdiEXgdeAGp3ucCH1Ig/keMjPcVxDOAe8C9xJJmpEYn9nUD9yO3HRNAXcBV1v67i3gFPIou1ngS6RnIRpiDEiWISQ34TiSEm8Cmby3E1m/spv/MhitIUf9auP/BWAOOIMssJwnsgAoiqIoii3+AawU2zaP8gsXAAAAAElFTkSuQmCC",alt:"plus",onClick:function(){return i(!a)}})}),Object(A.jsx)("ul",{className:"sidebar_list ".concat(a?"sidebar_list_active":""),children:["pink","#54CBBF","#F8BD6D","#FE9B71","#E3EE8E","#B592FD"].map((function(t,n){return Object(A.jsx)("li",{className:"sidebar_listitem",style:{backgroundColor:t},onClick:function(){return e.addNote(t)}},n)}))})]})})};var C=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("notes-app"))||[]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){localStorage.setItem("notes-app",JSON.stringify(n))}),[n]),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(j,{className:"sidebaar",addNote:function(e){var t=Object(r.a)(n);t.push({id:Date.now()+""+Math.floor(78*Math.random()),text:"Add Note",color:e,time:Date.now()}),a(t)}}),Object(A.jsx)(u,{notes:n,deleteNote:function(e){var t=Object(r.a)(n),c=t.findIndex((function(t){return t.id===e}));c<0||(t.splice(c,1),a(t))},updateText:function(e,t){var c=Object(r.a)(n),i=c.find((function(e){return e.id===t}));if(!(i<0)){i.text=e;var o=c.findIndex((function(e){return e.id===t}));c[o].text=e,a(c)}}})]})};o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(C,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.5d61e24e.chunk.js.map