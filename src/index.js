//The main difference with gulp/grunt and other task runners is while these files get a large list of files and concatenate together, webpack utilises a concept called dependency graph
// Webpack starts at the entry point (specified in config or submitted via command line argument) and will into files like export/ import/ export default / require / amd defines and it's going to mark those paths that are being referenced as dependencies.
// Webpack then goes to each of these dependencies and create modules and repeats that process through entire application.
import foostring from './fooString';
