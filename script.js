
var crsr = document.getElementById("cursor");
var crsrbg = document.getElementById("cursorbg");
document.addEventListener("mousemove", (dets)=>{
   crsr.style.left = dets.x +1+"px";
   crsr.style.top = dets.y+"px";
   crsrbg.style.left = dets.x - 350 +"px";
   crsrbg.style.top = dets.y -350+"px";
});

var crsrRToBeScaledFor = document.querySelectorAll(".crsrRToBeScaledFor");
crsrRToBeScaledFor.forEach(element => {
    element.addEventListener("mouseenter",()=>{
        crsr.style.backgroundColor = "red";
        crsr.style.borderRadius = "20px";
    })  
    element.addEventListener("mouseleave",()=>{
        crsr.style.backgroundColor = "#91f4ff";
        crsr.style.borderRadius = "0px";
        
    })  
});

function isMobileDevice() {
    return window.matchMedia("(max-width: 767px)").matches;
}
if(!isMobileDevice){
    gsap.to("#navbar", {
        // height: 30,
        justifyContent: "space-between",
        backgroundColor: "black",
        flexDirection: "row",
         scrollTrigger : {
             trigger : "#navbar",
             scroller : "body",
             // markers : true,
             start : "top -15%",
             end : "top -16%",
             scrub : 1
         }
     })
    gsap.to("#nav-up", {
        width: "10%",
        backgroundColor: "transparent",
        justifyContent: "center",
        flexDirection: "row",
         scrollTrigger : {
             trigger : "#nav-up",
             scroller : "body",
             start : "top -15%",
             end : "top -16%",
             scrub : 1
         }
     })
}
var headings = document.querySelectorAll(".heading h2");
headings.forEach((heading) => {
    gsap.from(heading, {
        x: 80,
        duration: 0.5,
        scrollTrigger: {
            trigger: heading,
            scroller: "body",
            start: "top 70%",
            end: "top 10%",
            scrub: 1
        }
    });
});
gsap.from("#projectsMain", {
    scale:0.9,
    opacity:0,  
    duration : "0.5",
    stagger : 0.1,
    scrollTrigger : {
        trigger : "#projectsMain",
        scroller : "body",   
        start : "top 70%",
        end : "top 55%",    
        scrub : 2
    }
});

gsap.from("#momentsRow1", {
        scale:0.9,
        opacity:0,  
        duration : "0.5",
        stagger : 0.1,
        scrollTrigger : {
            trigger : "#momentsRow1",
            scroller : "body",   
            start : "top 70%",
            end : "top 55%",
            scrub : 2
        }
});

gsap.to("#startQuote",{
    y:50,
    x:50,
    duration:0.5,
    scrollTrigger : {
        trigger : "#startQuote",
        scroller : "body",   
        start : "top 60%",
        end : "top 55%",
        scrub : 2
    }
});
gsap.to("#quote-row-2",{
    scale:1.06,
    duration:0.5,
    scrollTrigger : {
        trigger : "#startQuote",
        scroller : "body",   
        start : "top 60%",
        end : "top 55%",
        scrub : 2
    }
});
gsap.to("#endQuote",{
    y:-50,
    x:-50,
    duration:0.5,
    scrollTrigger : {
        trigger : "#startQuote",
        scroller : "body",   
        start : "top 60%",
        end : "top 55%",
        scrub : 2
    }
});

//Click Listeners
function alertt(){
    alert("You are being alerted");
}
function gotoLinkedIn(){
    window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
}
function gotoGitHub(){
    window.location.href = "https://github.com/ithesaurabh";
}
function gotoInstagram(){
    window.location.href = "https://www.instagram.com/krmada.apk/";
}
function gotoX(){
    window.location.href = "https://x.com/SaurabhKJha_Dev";
}
function gotoLeetCode(){
    window.location.href = "https://leetcode.com/u/codewithskjha/";
}
function gotoHack4Bengal(){
    window.location.href = "https://www.hack4bengal.tech/";
}
function gotoMail(){
    const email = "reach.saurabhkumarjha@gmail.com";
    const subject = "";
    const body =""
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
function sendEmail() {
    const email = "reach.saurabhkumarjha@gmail.com";
    const subject = "Join Our Team as a Software Developer";
    const body = `Dear Saurabh Kumar,

I hope this message finds you well. My name is [Your Name], and I am a [Your Position] at [Company Name]. We are impressed by your skills and experience in software development and would like to discuss an exciting opportunity with you.

About Us
[Company Name] is an innovative IT company committed to delivering top-notch solutions to our clients. We value creativity, collaboration, and continuous learning.

The Role
We are looking for a talented Software Developer to:
- Design, develop, and maintain software applications.
- Collaborate with teams to define and implement new features.
- Ensure application performance and fix bugs.

Your Skills
- Proficiency in [relevant programming languages/technologies].
- Strong problem-solving and teamwork abilities.
- Experience with [specific tools/methodologies].

Next Steps
If interested, please reply with your resume and a brief cover letter. We look forward to discussing how you can contribute to our team.

Best regards,

[Your Full Name]
[Your Position]
[Company Name]
[Your Phone Number]
[Your Email Address]
[Company Website]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}
function project1(){
    window.location.href = "https://github.com/ithesaurabh/Fusion-PDF";
}
function project2(){
    window.location.href = "https://github.com/ithesaurabh/bwuconnect2";
}
function project3(){
    window.location.href = "https://github.com/ithesaurabh/WhatsappExtend";
}
function blog1(){
    window.location.href = "https://www.linkedin.com/pulse/my-100daysofdsa-journey-saurabh-kumar-jha-0dnlc/";
}
function blog2(){
    // window.location.href = "https://www.linkedin.com/in/communicatewithsaurabh/";
    alert("Currently cooking🧑🏻‍🍳.Will be updated shortly");
}
function downloadResume(){
    window.location.href = "https://drive.google.com/file/d/1ky-ktYh8TEzw82Tc8G5kCalhPX1KNJT9/view?usp=sharing";
}
function moment1(){
    window.location.href = "https://www.instagram.com/p/C85ALBoSnbg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
}
function moment2(){
    window.location.href = "https://www.instagram.com/p/C7oQjo8SKLM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

//Quotes 

let quotesArray = [
    "The journey of a thousand miles begins with one step.",
    "You miss 100% of the shots you don’t take.",
    "Do what you can, with what you have, where you are.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The best way to predict the future is to create it.",
    "Dream big and dare to fail"
];
let max = 10;
let randomNumber = Math.floor(Math.random() * max);

let quote = document.getElementById('thisIsQuote');
quote.innerHTML = quotesArray[randomNumber];
// console.log(randomNumber);





