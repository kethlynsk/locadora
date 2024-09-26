import Movie from "../models/movie-model.js";

async function store(req, res) {
  try {
    await Movie.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const content = await Movie.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    const content = await Movie.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

export default {
  store,
  index,
  show,
  update,
};