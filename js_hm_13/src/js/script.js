"use strict";

import moment from 'moment';
import { groupBy } from "lodash-es"




function greet() {
  var day = moment().format('dddd');
  console.log('Have a great ' + day + '!');
};

export default greet;











