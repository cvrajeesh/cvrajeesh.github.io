(function () {
    var inbox = new WinJS.Binding.List([
        { name: "Rocco Gower", icon: "http://lorempixel.com/48/48/people/1", time: "8:05p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Did you get your tickets yet?" },
        { name: "Alonzo Swope", icon: "http://lorempixel.com/48/48/people/5", time: "7:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "I think we're all set. See you at the meeting tomorrow!" },
        { name: "Heather Richmond", icon: "http://lorempixel.com/48/48/people/7", time: "7:30p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Let's schedule some time to review the latest reports." },
        { name: "Lance McGuire", icon: "http://lorempixel.com/48/48/people/8", time: "6:59p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Yeah, let's talk about it tomorrow." },
        { name: "Joanna Cline", icon: "http://lorempixel.com/48/48/people/6", time: "5:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "Yes, I would definitely recommend it. I'm surprised you haven't seen it already!" },
        { name: "Heather Richmond", icon: "http://lorempixel.com/48/48/people/7", time: "5:30p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "I'm sorry I missed your call. Can I call you back in an hour?" },
        { name: "Brendan Pinkerton", icon: "http://lorempixel.com/48/48/people/9", time: "5:17p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Wow! That's great news! Did you get any photos?" },
        { name: "Trent Hoag", icon: "http://lorempixel.com/48/48/people/4", time: "4:44p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "The review went well! We're going to publish them next week!" },
        { name: "Alonzo Swope", icon: "http://lorempixel.com/48/48/people/5", time: "4:21p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Are you putting together the presentation for Thursday? Let me know if you need any help!" },
        { name: "Eliza Waller", icon: "http://lorempixel.com/48/48/people/10", time: "4:01p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Have you made your reservations yet? I got a pretty good deal." },
        { name: "Heather Richmond", icon: "http://lorempixel.com/48/48/people/7", time: "3:38p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Should we do a lunch meeting tomorrow? I'd like to go over the latest projections." },
        { name: "Lance McGuire", icon: "http://lorempixel.com/48/48/people/8", time: "3:32p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "This week is pretty busy. Should we plan for next week?" },
        { name: "Rocco Gower", icon: "http://lorempixel.com/48/48/people/1", time: "2:01p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Yes, I heard! That's great news! Have you told Martin?" },
        { name: "Joanna Cline", icon: "http://lorempixel.com/48/48/people/6", time: "1:16p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "I would not have believed it if I hadn't seen it myself." },
        { name: "Eliza Waller", icon: "http://lorempixel.com/48/48/people/10", time: "12:53p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Doors open at 7pm and the show starts at 8. Can you make it?" },
        { name: "Trent Hoag", icon: "http://lorempixel.com/48/48/people/4", time: "11:29a", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "I'd check with Helen. I think she's planning on sending them over in a few days." },
        { name: "Wiley Volz", icon: "http://lorempixel.com/48/48/people/2", time: "11:28a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Well, that was a surprise! I think you were right. Next week, then?" },
        { name: "Alonzo Swope", icon: "http://lorempixel.com/48/48/people/5", time: "10:41a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Thank you! I appreciate the feedback. Did you have any other suggestions?" },
        { name: "Alonzo Swope", icon: "http://lorempixel.com/48/48/people/5", time: "10:32a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "When should we schedule our next meeting? I'll be out of town for the rest of the month." },
        { name: "Joanna Cline", icon: "http://lorempixel.com/48/48/people/6", time: "9:50a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Great photos! Did you use your new camera lens?" }
    ]);

    var unread = new WinJS.Binding.List([
        { name: "Alonzo Swope", icon: "http://lorempixel.com/48/48/people/5", time: "7:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "I think we're all set. See you at the meeting tomorrow!" },
        { name: "Joanna Cline", icon: "http://lorempixel.com/48/48/people/6", time: "5:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "Yes, I would definitely recommend it. I'm surprised you haven't seen it already!" },
        { name: "Trent Hoag", icon: "http://lorempixel.com/48/48/people/4", time: "4:44p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "The review went well! We're going to publish them next week!" },
        { name: "Trent Hoag", icon: "http://lorempixel.com/48/48/people/4", time: "11:29a", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "I'd check with Helen. I think she's planning on sending them over in a few days." }
    ]);

    var flagged = new WinJS.Binding.List([
        { name: "Heather Richmond", icon: "http://lorempixel.com/48/48/people/7", time: "7:30p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Let's schedule some time to review the latest reports." },
        { name: "Joanna Cline", icon: "http://lorempixel.com/48/48/people/6", time: "5:34p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "Yes, I would definitely recommend it. I'm surprised you haven't seen it already!" },
        { name: "Lance McGuire", icon: "http://lorempixel.com/48/48/people/8", time: "3:32p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "This week is pretty busy. Should we plan for next week?" },
        { name: "Wiley Volz", icon: "http://lorempixel.com/48/48/people/2", time: "11:28a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Well, that was a surprise! I think you were right. Next week, then?" },
        { name: "Alonzo Swope", icon: "http://lorempixel.com/48/48/people/5", time: "10:32a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "When should we schedule our next meeting? I'll be out of town for the rest of the month." }
    ]);

    var important = new WinJS.Binding.List([
        { name: "Trent Hoag", icon: "http://lorempixel.com/48/48/people/4", time: "4:44p", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "The review went well! We're going to publish them next week!" },
        { name: "Eliza Waller", icon: "http://lorempixel.com/48/48/people/10", time: "12:53p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "Doors open at 7pm and the show starts at 8. Can you make it?" },
        { name: "Alonzo Swope", icon: "http://lorempixel.com/48/48/people/5", time: "10:32a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "When should we schedule our next meeting? I'll be out of town for the rest of the month." }
    ]);

    var deleted = new WinJS.Binding.List([
        { name: "Wiley Volz", icon: "http://lorempixel.com/48/48/people/2", time: "8:32p", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "It was great seeing you! Let's do this againt next month!" },
        { name: "Eliza Waller", icon: "http://lorempixel.com/48/48/people/10", time: "6:03a", readStateColor: "rgba(255, 255, 255, .4)", readStateWeight: "", messageText: "I can't wait to show you my new purchase!" }
    ]);

    var blocked = new WinJS.Binding.List([
        { name: "Bryce Benefield", icon: "http://lorempixel.com/48/48/people/3", time: "5:56a", readStateColor: "rgba(255, 255, 255, 1)", readStateWeight: "600", messageText: "See you at practice!" }
    ]);

    WinJS.Namespace.define("Sample", {
        Inbox: inbox,
        Unread: unread,
        Flagged: flagged,
        Important: important,
        Deleted: deleted,
        Blocked: blocked
    });
})();

WinJS.UI.processAll().then(function () {
    //var toggleSizeButton = document.querySelector("#toggleSizeButton");
    //toggleSizeButton.addEventListener("click", function () {
    //    var messageList = document.querySelector("#messageList");
    //    messageList.classList.toggle("wide");
    //    messageList.winControl.forceLayout();
    //});
});