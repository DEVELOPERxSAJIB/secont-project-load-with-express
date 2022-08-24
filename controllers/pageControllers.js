const path = require('path');

// home page controller
const showHomepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

// home page2 controller
const showHomepage2 = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-2.html'));
}

// home page3 controller
const showHomepage3 = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-3.html'));
}

// home page4 controller
const showHomepage4 = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index-4.html'));
}

// <---------------- Menu (PAGES) -------------------->

// about page conroller
const showAboutpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
}

// Gallery page conroller
const showGallerypage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/gallery.html'));
}

// policy page conroller
const showPolicypage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/policy.html'));
}

// faq page conroller
const showFaqpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/faq.html'));
}

// <---------------- Menu (COURSE) ----------------->

// faq page conroller
const showCoursepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/courses.html'));
}

// faq page conroller
const showCourseSinglepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/courses-single.html'));
}

// <---------------- Menu (EVENTS) ----------------->

// event page controller
const showEventpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/events.html'))
}

// event page2 controller
const showEventpage2 = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/events-2.html'))
}

// event page3 controller
const showEventSinglepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/events-single.html'))
}

// <---------------- Menu (TEACHERS) ----------------->

// teachers page controller
const showTeacherpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/teachers.html'))
}

// teachers page controller
const showTeacherpage2 = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/teachers-2.html'))
}

// teachers page controller
const showTeacherSinglepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/teachers-single.html'))
}

// <---------------- Menu (BLOG) -----------------> //

// Blog page controller
const showBlogpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'))
}

// BlogSingle page controller
const showBlogSinglepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/blog-single.html'))
}

// <---------------- Menu (CONTACT) -----------------> //

// shop page controller
const showShoppage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop.html'));
}

// shop single page controller
const showShopSinglepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/shop-single.html'));
}

// <---------------- Menu (CONTACT) -----------------> //

// contact page controller
const showContactpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
}

// contact singel page controller
const showContactSinglepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/contact-2.html'));
}

// module export
module.exports = {
    showHomepage,
    showHomepage2,
    showHomepage3,
    showHomepage4,

    showAboutpage,
    showGallerypage,
    showPolicypage,
    showFaqpage,

    showCoursepage,
    showCourseSinglepage,

    showEventpage,
    showEventpage2,
    showEventSinglepage,

    showTeacherpage,
    showTeacherpage2,
    showTeacherSinglepage,

    showBlogpage,
    showBlogSinglepage,

    showContactpage,
    showContactSinglepage,

    showShoppage,
    showShopSinglepage
}