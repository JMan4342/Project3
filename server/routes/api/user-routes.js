const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  savePark,
  deletePark,
  saveActivity,
  deleteActivity,
  saveCampground,
  deleteCampground,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, {
  savePark,
  saveActivity,
  saveCampground,
});

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/parks/:parkCode').delete(authMiddleware, deletePark);
router.route('/activities/:id').delete(authMiddleware, deleteActivity);
router.route('/thingsToDo/:id').delete(authMiddleware, deleteActivity);
router.route('/campgrounds/:id').delete(authMiddleware, deleteCampground);

module.exports = router;


// MOVE EVERYTHING BETWEEN THESE TWO COMMENTS

const { getParks, getAlerts, getActivities, getCampgrounds } = require("../../utils/api");

app.get("/parks", async function (req, res) {
  res.json(await getParks(req.query));
});

app.get("/alerts", async function (req, res) {
  console.log(req.query);
  res.json(await getAlerts(req.query.q));
});

app.get("/thingstodo", async function (req, res) {
  console.log(req.query);
  res.json(await getActivities(req.query.q));
});

app.get("/campgrounds", async function (req, res) {
  console.log(req.query);
  res.json(await getCampgrounds(req.query.q));
})


// MOVE EVERYTHING BETWEEN THESE TWO COMMENTS