// gkc_hash_code : 01ERNTQXRDAFHMG3Q0VS9Q3CDE
import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import noCache from "nocache";

export const app = () => {
  const config = express();

  // parse application/x-www-form-urlencoded
  config.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  config.use(bodyParser.json());
  config.use(morgan("combined"));

  config.use(helmet());
  config.use(noCache());
  config.use(cors({ origin: true }));
  // Uncomment if need to measure response time
  // config.use(measureResponseTime);

  return config;
};
