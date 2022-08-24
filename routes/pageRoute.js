const express = require('express');
const path = require('path');
const {showHomepage, showHomepage2, showHomepage3, showHomepage4, showAboutpage, showGallerypage, showPolicypage, showFaqpage, showCoursepage, showCourseSinglepage, showEventpage, showEventpage2, showEventSinglepage,     showTeacherpage, showTeacherpage2, showTeacherSinglepage, showBlogpage, showBlogSinglepage, showContactpage, showContactSinglepage, showShoppage, showShopSinglepage } = require('../controllers/pageControllers');
 
// init router
const router = express.Router();

// route
router.get('/', showHomepage);
router.get('/home2', showHomepage2);
router.get('/home3', showHomepage3);
router.get('/home4', showHomepage4);
router.get('/about', showAboutpage);
router.get('/gallery', showGallerypage);
router.get('/policy', showPolicypage);
router.get('/faq', showFaqpage);
router.get('/courses', showCourseSinglepage);
router.get('/courses-single', showCoursepage);
router.get('/events', showEventpage);
router.get('/events2', showEventpage2);
router.get('/events-single', showEventSinglepage);
router.get('/teachers', showTeacherpage);
router.get('/teachers2', showTeacherpage2);
router.get('/teachers-single', showTeacherSinglepage);
router.get('/blog', showBlogpage);
router.get('/blog-single', showBlogSinglepage);
router.get('/contact', showContactpage);
router.get('/contact-2', showContactSinglepage);
router.get('/shop', showShoppage);
router.get('/shop-single', showShopSinglepage);





// export router
module.exports = router;
