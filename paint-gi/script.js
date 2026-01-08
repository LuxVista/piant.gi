const myMemories = [
    { url: "https://i.postimg.cc/KYN6Bkzz/1756575364025.jpg", text: "นี่่่่มือปิดปากน่าร้ากกกกกกกกกกเริสมากกกก" },
    { url: "https://i.postimg.cc/1zHkwntf/1756576578991.jpg", text: "สวยเกิ๊นออร่าคนสวยยยยยยยยยยยย" },
    { url: "https://i.postimg.cc/8CH2MJ57/1756576579491.jpg", text: "คนอะไรคือมางามแท้้สวยมากๆค้าบบบบบบ" },
    { url: "https://i.postimg.cc/yNPMcgdx/1756576580152.jpg", text: "ยิ้มน่ารักกกกกกกกกกกกมากกกกกกกก" },
    { url: "https://i.postimg.cc/mrwvCzDc/IMG-20250913-144705-741.jpg", text: "น่ารักมากรูปนี้หลงรักกกกกกกกกกกกก" },
    { url: "https://i.postimg.cc/KYN6Bkzk/IMG-20250914-211427-263.jpg", text: "ยิ้มยังไงให้น่ารักขนาดนี้้้้้" },
    { url: "https://i.postimg.cc/vBZpzYgY/IMG-20250917-202543-257.jpg", text: "ลุคคุณหนูมากกกกสวยมากกกกกกกกกกกก" },
    { url: "https://i.postimg.cc/Px5B4Xpx/IMG-20250918-195204-286.jpg", text: "ดูทีไรมีหัวใจระเบิดทุกทียิ้มน่ารักม๊ากกกกกก" },
    { url: "https://i.postimg.cc/1t3LHmnz/IMG-20250919-174242-866.jpg", text: "รูปนี้น่ารักออกแนวไม่พอจายยยยยยยยย" },
    { url: "https://i.postimg.cc/Tw3Z9dLh/IMG-20250920-180815-648.jpg", text: "ใส่แว่นแล้วสวยเกินต้านนนนนนนนนนนน" },
    { url: "https://i.postimg.cc/d1VzBskL/IMG-20250921-152913-053.jpg", text: "ตายตายสวยเกิ๊นนนนนนนนนนนนนนนน" },
    { url: "https://i.postimg.cc/Y9CJ3rGG/phe-n.jpg", text: "ยกนิ้วให้เรยนิ่งๆแต่ซิ่งนะคร้าบบบบบบ" },
    { url: "https://i.postimg.cc/nh8rw51v/1757693802934.jpg", text: "สองนิ้วไม่สองจายน่ายักกกกกก" },
    { url: "https://i.postimg.cc/MpkHr4YQ/1757693803350.jpg", text: "คิดดูขนาดแสงยังให้อ่ะออร่าคนจะสวยทำไงด้ายยยย" },
    { url: "https://i.postimg.cc/BnxbWghF/1757693803616.jpg", text: "เริสมากกกกกกกกนี่แหละๆยอมแล้วคร้าบบบบบบ" },
    { url: "https://i.postimg.cc/FHtznqxJ/1757694512113.jpg", text: "องค์ประกอบดีไปหมดโดยรวมให้ผ่านทุกรูปน่ารักกกกกก" },
    { url: "https://i.postimg.cc/wjKMbPkt/1757694512502.jpg", text: "เหนื่อยพักนะค้าบขนาดร้อนยังสวยได้อ่ะจะสวยไปหนายยยย" },
    { url: "https://i.postimg.cc/VkyvHTFM/1757694512764.jpg", text: "โห้เพ้นถามจริงจะสวยเกินไปมั้ยยยยยยยยยยยยยย" },
    { url: "https://i.postimg.cc/nVPCqMjv/1761901425594.jpg", text: "น่ารักเค้าชอบบบบบบบบบบบน่ารักที่สุดเลยหมูแคะะะะ" },
    { url: "https://i.postimg.cc/MZFv1XMY/1761901425848.jpg", text: "น่ารักจังเลยยยยยยยยยยยรักเพ้นนนนนนยอมแล้วค้าบบบบ" },
    { url: "https://i.postimg.cc/BZVX2tLh/1761901425925.jpg", text: "หู้ยยยยยยยยยยยคนสวยเทพธิดานางฟ้าเทียบไม่ติดอ่ะบอกเรยย" },
    { url: "https://i.postimg.cc/FFB701dc/1762691836000.jpg", text: "รูปนี้วันเกิดเค้าดอกไม้สวยน่ารักเค้ดน่ารักเพ้นก็น่ารักมากๆรักเพ้นมากๆเลยนะค้าบบบ" },
    { url: "https://i.postimg.cc/bYBs1dDZ/1762691836451.jpg", text: "เพ้นบอกให้ก้มหน้าจะได้ถ่ายเทสดีีีเพราะเพ้นอยากได้รูปเทสดีีี" },
    { url: "https://i.postimg.cc/MZFv1XMB/1762691836660.jpg", text: "ดอกไม้สวยมากเด้กก็อร่อยยยยยยยยยยย" },
    { url: "https://i.postimg.cc/J72GjtD0/1762691837316.jpg", text: "รูปนี้ยังไม่ลดแสงเทสดีมากเพ้นเป็นคนถ่ายยยยยเองกับมือเลยนะะะะ" },
    { url: "https://i.postimg.cc/MZFv1XMM/1762691838434.jpg", text: "มุมใกล้น่ารักจังตัวเราแต่สู้เพ้นไม่ได้เพ้น่ารักมากมากกกกกกกกกกกก" },
    { url: "https://i.postimg.cc/xj4cLqJT/1762691839166.jpg", text: "เทสดีไม่ไหวน่ารักเกิ๊นนนนนนนนนนนนนนนนนนนนนนนนนนนนรักๆเพ้นนนนนนน" },
    { url: "https://i.postimg.cc/j2m2TkY0/1762691840569.jpg", text: "ดอกไม้สวยมากเพ้นทำให้เค้าตั้งนานนนน่ารักมากๆเพ้นน่ารักที่สุดเรยร้ากกกกกกกก" },
    { url: "https://i.postimg.cc/brWrPFc7/1762691841269.jpg", text: "เค้กน่ากินนนนเค้ดอร่อยมากกกกมากกกกมากกกกกมีความสุขที่สุดเรยยยย" },
    { url: "https://i.postimg.cc/HnRnmPDh/1763429434846.jpg", text: "รูปนี้เค้าถ่ายมุมสูงคนแก่เพ้นไม่ชอบเค้าว่าน่ารักมากมากเลยนะะะะะะะะะ" },
    { url: "https://i.postimg.cc/3NVNhb56/1763429435350.jpg", text: "เพ้นให้นิ้วกลางกันทำไมมมมมแต่ก็สมควรแหละเค้ากวนเพ้นเองงงง" },
    { url: "https://i.postimg.cc/pr4rv1b0/1763429435991.jpg", text: "หัวจายเพ้นเป็นคนวาดน่าร้ากล้างออกยากแต่อยมเพราะแฟนเค้าอยากทำำำ" },
    { url: "https://i.postimg.cc/rs3sTYXQ/1763429436670.jpg", text: "น่าร้ากมากเพ้นคนเก่งเก่งที่สุดเรยทำงานตั้งเยอะะะะะะ" },
    { url: "https://i.postimg.cc/3NVNhb5X/1763429437143.jpg", text: "เค้าทำตาตกใจเพ้นจะฆ่าเค้าแน่เรยทุกคนน่ากลัววววววว(เพ้นน่ารักกกก)" },
    { url: "https://i.postimg.cc/90K02N5P/1763429437734.jpg", text: "สองนิ้วยิ้มสวยน่ารักรูปคู่ของเราาาาาาาาา" },
    { url: "https://i.postimg.cc/Fz8zvn5J/1763429438260.jpg", text: "เพ้นเอี่ยงคอน่ารักมากน่ารักเกิ๊นรักแฟนมากๆหมูแคะะะะะ" },
    { url: "https://i.postimg.cc/fypysgnX/1763435307393.jpg", text: "อุ้ยพบเจอคนน่ารักนะเนี่ยยยยยยยยย" },
    { url: "https://i.postimg.cc/V675Gk7L/1764683809358.jpg", text: "สาวรังสิตคนสวยรังสิตมากกกกกกเค้าชอบเลยยหลงรักกกก" },
    { url: "https://i.postimg.cc/k4jD1gjq/1765463856758.jpg", text: "เพ้นมาในลุคสาวไทยยยค่ตจะสวยยิ่งกว่านางรำในวังหลวงงงง" },
    { url: "https://i.postimg.cc/9Mxz8QxV/1765463858848.jpg", text: "สวยครับให้10/10ให้ล้านยังได้ให้เท่าไหร่ก้ไม่พอเพราะเป็นถึงขั้นนางฟ้าาา" },
    { url: "https://i.postimg.cc/0QtrWyVF/1765584390608.jpg", text: "รูปคู่วันกีฬาสีตอนไปดูแข่งวิ่งเพ้นน่ารักอยู่ตลอดเรยยยยเค้าดูอ้วนมากกก" },
    { url: "https://i.postimg.cc/j58CgSM3/1765584390897.jpg", text: "เพ้นน่ารักเค้าอะไรแอ็คอยู๋นั่นแหละอารายยยยย" },
    { url: "https://i.postimg.cc/Px6N35SR/1765584391079.jpg", text:  "เพ้นยิ้มน่าร้ากจางงงงเค้ารักเพนมากๆเลยนะค้าบบบบบ" },
    { url: "https://i.postimg.cc/qv8qfLmZ/IMG-20250806-175235-538.jpg", text: "รูปนี้หายากกกกกกกเพื่อนเค้าแอบถ่ายเพ้นช่วงแรกๆของเราเลยยย" },
    { url: "https://i.postimg.cc/dV83MBW5/IMG-20250806-175239-622.jpg", text: "มีคนรู็ตัวหันมามองงงงงงงงงน่ารักจังเรยเพ้นเนี่ยยยยย" },
    { url: "https://i.postimg.cc/vZWTRzPP/IMG-20250806-175245-209.jpg", text: "เพ้นยืนคุยเค้านั่งคุยอะไรเนี่ยยยยยยยยยยยยยยยอะไรของเค้าเนี่ยย" },
    { url: "https://i.postimg.cc/t4hJ05rD/IMG-20250806-175253-933.jpg", text: "574938384830รูปนี้หลุดมากดูเค้าทำหน้าเพ้นทำอารายยยย" },
    { url: "https://i.postimg.cc/YC10c3X6/IMG-20250806-175538-086.jpg", text: "รูปนี้เพื่อนชั้นถ่ายอีกแระถ่ายเยอะเกิ๊นแต่ก็ดีน่ารักกกก" },
    { url: "https://i.postimg.cc/7ZghvVBg/IMG-20250806-233427-251.jpg", text: "ช่วยด้วยตำรวจผมจะโดนทำร้ายร่างกายอ๊ากกกกกกกยอมแล้ววว" },
    { url: "https://i.postimg.cc/VkjvyR7B/IMG-20250806-233429-415.jpg", text:"เหมือนโดนหาเรื่องเลยใจเย็นค้าบพี่ผมยอมแร้ววววว" },
    { url: "https://i.postimg.cc/pLDrNZ0z/IMG-20250819-203018-699.jpg", text: "น่ารักรูปแรกๆเลยที่เพ้นส่งให้เค้าดูแบบบันทึกได้มาน่าร้ากกกกกกครั่งรักกกก" },
    { url: "https://i.postimg.cc/cLQCqmD8/IMG-20250901-230506-474.jpg", text: "นอนถ่ายก็ยังสวยเพ้นจะสวยเกินไปแล้วววววววววววววววววววววววววว" },
    { url: "https://i.postimg.cc/Cxj5yNvn/IMG-20250910-200320-325.jpg", text: "นอนนนนนนนนนนนเพ้นชอบนอนนนนนนนนนนนนนนน" },
    { url: "https://i.postimg.cc/Nj1Fh4NK/IMG-20250912-185057-423.jpg", text: "นอนถ่ายยังไงก็สวยเพ้นก็จะสวยเกินหมูแคะะะะะะ" },
    { url: "https://i.postimg.cc/Z5knDgLC/IMG-20250912-233154-086.jpg", text: "เพื่อยเค้าแอบถ่ายเพ้นแกะเปลือกไม้มาโยนเล่นไหนขะปาใส่เค้าอีกเพ้นเด้กบ้าาา" },
    { url: "https://i.postimg.cc/mgxk6qSf/IMG-20250912-233157-350.jpg", text: "แกะไม้ไม่สนโลกแล้วทูกคนนนนนน" },
    { url: "https://i.postimg.cc/Cxy56t4g/IMG-20250912-233201-387.jpg", text: "แกะไม้จนต้นไม้จะตุยแล้วเพ้นเอ้ยยยยย" },
    { url: "https://i.postimg.cc/sgFx08Jy/IMG-20250912-233203-555.jpg", text: "รูปนี้ก็ใกล้เกิ๊นคนถ่ายจะใกล็ไปไหนเนี่ยยยยยย" },
    { url: "https://i.postimg.cc/Gm0tSNjc/IMG-20250912-233205-757.jpg", text: "เราสองคนแะเปลือกต้นไม้ไปด้วยกานนนนนนนนน" },
    { url: "https://i.postimg.cc/NjhFPVxG/IMG-20250912-233207-925.jpg", text: "แกะไม้ต่อปายยยไปต่อปายยยยยยยยยย" },
    { url: "https://i.postimg.cc/y8qxr5Tx/IMG-20250912-233209-827.jpg", text: "แกะไม้ไม่เว้นวันแกะเป็นชีวิตจิตจายอ่ะคิดดููุ" },
    { url: "https://i.postimg.cc/L6ghDRj2/IMG-20250915-183639-465.jpg", text: "บักต้าจะก้มทำไมมิทราบเพ้นดุครับบบบบ" },
    { url: "https://i.postimg.cc/L6ghDRjR/IMG-20250916-210540-561.jpg", text: "เยี่ยมน่ารักเอาที่1ไปเรยคร้าบยอมแร้วววว" },
    { url: "https://i.postimg.cc/MKfX5x12/IMG-20250923-172314-496.jpg", text: "นี่่่เอาจาดดดดดดระดับเพ้นรังสิตตตต" },
    { url: "https://i.postimg.cc/YqLjRkQH/IMG-20250924-153546-718.webp", text: "เห้ยแฟนเค้าป่ะน่ารักจังมีกิ๊บด้วยยยยยย" },
    { url: "https://i.postimg.cc/tCn7kyWw/IMG-20250924-222335-834.jpg", text: "กล้องเค้าถ่ายเพ้นน่ารักยืนอยู่ด้วยกานนนนนนนนนน" },
    { url: "https://i.postimg.cc/Nf2LDYmn/IMG-20250927-154515-598.jpg", text: "นอนถ่ายรูปยังไงให้สวยดูนะครับเพ้นถ่ายสวยคนเดียวววว" },
    { url: "https://i.postimg.cc/hPQhsgTC/IMG-20250928-153526-769.jpg", text: "หมาน้อยน่ารักกกกกกกกกกกกกกกกก" },
    { url: "https://i.postimg.cc/yY3WjBcQ/IMG-20250928-211438-462.jpg", text: "ชิวมากน่ารักมากๆเด้กอ้วรรรรรร" },
    { url: "https://i.postimg.cc/qM6gw0yw/IMG-20250930-210933-067.jpg", text: "มุมนี้ไม่ได้หาถ่ายได้ง่ายๆนะเว้ยยยยยยยยยยยย" },
    { url: "https://i.postimg.cc/Kv34fFBN/IMG-20251002-192413-276.jpg", text: "เธอเป็นลูกคุณหนููุุุ" },
    { url: "https://i.postimg.cc/sDG1my74/IMG-20251003-222115-566.jpg", text: "น่าร้ากเสื้อพ่ออแน่ๆเรยยยยยยย" },
    { url: "https://i.postimg.cc/Y2shQjGy/IMG-20251011-191555-760.jpg", text: "เค้ายอมแล้วเพ้นน่ารักมากจริงๆเค้านั่งพิมเป็นชั่วโมงได้มานั่งย้อนดูรู)เพ้นเค้ามีแรงเลยยย" },
    { url: "https://i.postimg.cc/jqFLyCwg/IMG-20251013-124200-972.jpg", text: "น่าร้ากไม่ไหวเค้ายอมเพ้นแล้วจริงๆเพ้นหยุดน่ารักได้มั้ยยยย" },
    { url: "https://i.postimg.cc/mZ5t7hzj/IMG-20251016-190215-537.jpg", text: "รูปนี้เพ้นถ่ายมาแบบไม่เต็มจอยังไงๆก็สวยอยู่ดีีีีีี" },
    { url: "https://i.postimg.cc/Fz7z2Xq7/IMG-20251119-203342-647.jpg", text: "เธอคือนางฟ้าจริงๆน่ารักมากจริงๆต้ายอมทั้งใจจจจจ" },
    { url: "https://i.postimg.cc/SRJRwb5j/IMG-20251122-190003-780.jpg", text: "เพ้นดูเกรงๆนะสวยอยู่ดีทั้งใจยังไงก็เพ้นนนน" },
    { url: "https://i.postimg.cc/x8c8WV7C/IMG-20251123-215513-773.jpg", text: "นี่เพ้นเล่นฟีฟายหรอ!!! (เพ้นตอบใช่แล้วจะทำไมไอ่กากกก)เพ้นเล่นเกมระดับหัวแคลนนน" },
    { url: "https://i.postimg.cc/yxkxwC5N/IMG-20251123-215516-247.jpg", text: "ตกใจหมดจ่ายค่าเสียหายมาเลยจ่ายด้วยคำบอกรักกกก" },
    { url: "https://i.postimg.cc/J0G09Cg4/IMG-20251123-215518-400.jpg", text: "เพ้นออกงานน่ารักสวยมากกกกกกกกเพ้นเก่งมากกกก" },
    { url: "https://i.postimg.cc/GtHtZnNb/IMG-20251128-144159-917.jpg", text: "น่ารักขอจับใส่ตู้มาดูคนเดียวได้มั้ยยยน่ารักเกินอ่ะะะะ" },
    { url: "https://i.postimg.cc/HnVnf1KH/IMG-20251128-144523-995.jpg", text: "เห้ยเพ้นเริ่มหวงแล้วนะรักนะเว้ยยยยย" },
    { url: "https://i.postimg.cc/tJYJLGfp/IMG-20251128-144527-597.jpg", text: "เสื้อกันหนาวที่เพ้นชอบใส่น่ารักมากขนาดตอนเข้าแถวนะเนี่ยยยย" },
    { url: "https://i.postimg.cc/Px6N356N/IMG-20251201-092520-493.jpg", text: "เพ้นจับผมทุกคนหลบไปเพ้นจะเดินนนนน" },
    { url: "https://i.postimg.cc/gJMrS2Mj/IMG-20251201-092611-887.jpg", text: "น่ารักเหมือนหมูแคะะะะะะะะ" },
    { url: "https://i.postimg.cc/63HTjpHB/IMG-20251203-112420-460.jpg", text: "เทศกาลแห่งความรักรักเพ้นนะะะะะะ" },
    { url: "https://i.postimg.cc/xCsqx16w/IMG-20251212-084653-049.jpg", text: "ใจละลายหมดแล้วเพ้นค้าบบบบบบบ" },
    { url: "https://i.postimg.cc/XJ2XHYs2/IMG-20251215-180906-691.jpg", text: "สะพายกระเป๋าไปเรียนกานนนนนนน" },
    { url: "https://i.postimg.cc/MKfX5xVt/Locket-1760177257077-16.webp", text: "รูปล่าสุดเลยในปีที่แล้วคิดถึงเพ้นนน" },
    { url: "https://i.postimg.cc/nVPCqMjS/Locket-1760177439669-84.webp", text: "รูปนี้หสดูยากมากเพ้นตอนสมัยมัธยมน่ารักจังเรยจริงๆๆๆ" }
];

let player;
let isFirstPlay = true;

// YouTube API Setup
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'q8KbPh4biqk',
        playerVars: { 'autoplay': 0, 'loop': 1, 'playlist': 'q8KbPh4biqk' },
        events: {
            'onReady': () => console.log("Player Ready")
        }
    });
}

function changePage(num) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById('page-' + num).classList.remove('hidden');
    window.scrollTo(0,0);
}

function checkPassword() {
    const input = document.getElementById('pass-input');
    // รหัสผ่าน: 01102568
    if (input.value === "01102568") {
        changePage(3);
    } else {
        alert("รหัสผ่านไม่ถูกต้องงง");
        input.value = "";
    }
}

function startMemoryExplosion() {
    const gift = document.getElementById('main-gift');
    const vinyl = document.getElementById('music-vinyl');
    
    // 1. เล่นเพลง
    vinyl.classList.remove('hidden');
    if (isFirstPlay && player) {
        player.unMute();
        player.playVideo();
        document.getElementById('vinyl-img').style.animationPlayState = "running";
        document.getElementById('music-vinyl').classList.add('playing');
        isFirstPlay = false;
    }

    // 2. เปิดกล่อง
    gift.classList.add('gift-open');
    document.getElementById('gift-hint').style.display = "none";

    // 3. ดีดรูป
    setTimeout(spawnPhotos, 600);
}

function spawnPhotos() {
    const canvas = document.getElementById('memories-canvas');
    if (canvas.children.length > 0) return;

    // หาตำแหน่งกลางจอสำหรับจุดเริ่มต้นการดีด
    const centerX = window.innerWidth / 2 - 75;
    const centerY = 100;

    myMemories.forEach((item, index) => {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'photo-card';
            el.innerHTML = `<img src="${item.url}"><p style="font-size:10px; margin-top:8px; text-align:center;">${item.text}</p>`;
            
            // Lightbox Event
            el.onclick = () => openLightbox(item.url, item.text);

            // เซ็ตตำแหน่งเริ่ม (ซ่อนอยู่ที่กล่อง)
            el.style.left = centerX + "px";
            el.style.top = centerY + "px";
            el.style.opacity = "0";
            el.style.transform = "scale(0)";
            canvas.appendChild(el);

            // พิกัดเป้าหมาย (กระจายลงมาข้างล่าง)
            const targetX = Math.random() * (window.innerWidth - 170);
            const targetY = (index * 250) + 300;
            const rotation = (Math.random() - 0.5) * 40;

            // รันแอนิเมชั่นดีดออก
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.left = targetX + "px";
                el.style.top = targetY + "px";
                el.style.transform = `scale(1) rotate(${rotation}deg)`;
            }, 50);

            if (index === myMemories.length - 1) {
                document.getElementById('final-footer').classList.remove('hidden');
                canvas.style.minHeight = (targetY + 500) + "px";
            }
        }, index * 300);
    });
}

function openLightbox(url, caption) {
    document.getElementById('lightbox-img').src = url;
    document.getElementById('lightbox-caption').innerText = caption;
    document.getElementById('lightbox').classList.remove('hidden');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
}

function toggleMute() {
    const vinyl = document.getElementById('vinyl-img');
    const playerDiv = document.getElementById('music-vinyl');
    if (player.isMuted()) {
        player.unMute();
        vinyl.style.animationPlayState = "running";
        playerDiv.classList.add('playing');
    } else {
        player.mute();
        vinyl.style.animationPlayState = "paused";
        playerDiv.classList.remove('playing');
    }
}

function toggleMainLetter() {
    document.getElementById('main-envelope').classList.toggle('open');
}