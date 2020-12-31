// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  filter,
  includes,
  toLower,
  split,
  map,
  uniq,
  sortWith,
  ascend,
  path,
  descend,
} from "ramda";
import filters from "../../data/filters";
import jobs from "../../data/jobs";

const searchCriteria = (search) => (jobs) =>
  includes(toLower(search), toLower(jobs.name)) ||
  includes(toLower(search), toLower(jobs.job_title));

export default async (req, res) => {
  const { search, sortby } = req.query;
  /* console.log(search, sortby); */
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));
  let newJobs = jobs;
  if (!!search) {
    let passSearch = searchCriteria(search);
    newJobs = filter((x) => passSearch(x), jobs);
  }
  if (!!sortby) {
    let sortCriteria = split("&", sortby);
    sortCriteria = map((x) => split(".", x), sortCriteria);
    sortCriteria = uniq(sortCriteria);
    let criteria = sortCriteria.map(([val, cri]) =>
      cri === "asc"
        ? ascend(path(["items", 0, val]))
        : descend(path(["items", 0, val]))
    );
    let sorted = sortWith(criteria);
    newJobs = sorted(newJobs);
  }
  res.json(newJobs);
};
