const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";

module.exports = {
  //For Enabling Commands Like AUTO_STATUS_RED Type true For Disenabling Type false
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  //_________________________________________________________________________________________________________________________________
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  //_________________________________________________________________________________________________________________________________
  AUTO_REACT: process.env.AUTO_REACT || 'false',
  //_________________________________________________________________________________________________________________________________
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || 'false',
  //_________________________________________________________________________________________________________________________________
  AUTO_BIO: process.env.AUTO_BIO || 'false',
  //_________________________________________________________________________________________________________________________________
  AUTO_READ_MSG: process.env.AUTO_READ_MSG || 'false',
  //_________________________________________________________________________________________________________________________________
  AUDIO_DATA: process.env.AUDIO_DATA || "UMAR;KING;https://graph.org/file/8976892f2f615077b48cd.jpg",
  //_________________________________________________________________________________________________________________________________
  BRANCH: "main",
  //_________________________________________________________________________________________________________________________________
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURuSmd6eUtEMTRtVW9BV2dmdC9YK3oyVEpieHl2WUdCSHdqTncvMFhVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BBTHJCTFdFNCs0VlJzVFhqcHIxZXh2YUNjbnlxdHoxejY4Rm5obkVUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRUVJMDlhUW50ak9oVmNYSmZVYjRnT0cyT01CQnlyNVRjczlhMEQxTW0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzaW5vbVlTWklVN1pKZWRQZ09LR2JxMVdsd0pocEZRaVR4ZjgwNjkyOFRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQa1Nmdm9PTndqendMTldDMEVLSjZFQnpSSnJMQnlDeUFJMm5FTzd2MkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlycHFQK0lYWVIwMGE5MXRuMnBBMzV1NFJZRnJFbE1JeUwrbzdML0ZNREU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JsY1lqVG51dnJNZnM1QXlYUzF1UWFYVklOT0VyVEtQTCtwYmdqbGxIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2dwUUlVU3lySUtiNjBueTVETkwrUVdoaU9NWEVsWkFNZjdVV0Q4cXcwOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZHc1BrQVB4cGdZWWlyQzNaeEhlb3JtU1RPMlMvZkpUeWFaUGpiRFRzNktjRkJlYkVwdzljMW5IeXA0Ni9rSnpPcFV4UmU3bUduWmsxb2M4UGhuaGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiMWhxYVFVeGRUbmJMbk52SDZZejdOcTl6blBZcXM2Qm1aK1B6QlZRRyszQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQ25DQTltdDVUOWlnNEFvamY1T293ZyIsInBob25lSWQiOiI2NGQ2YTNkNC01YTQ3LTRiODQtYjNmOS01Mjg0MTNjYzJmYjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmZENjlXZGtXQ1dramxVNFdXeHJwdlpEN0FBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVDUW05UnZCVmdDOGVDemFzVnNmL3JLT3k4ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUS0ZHS1o0NCIsIm1lIjp7ImlkIjoiOTIzMTU4OTMwODY0OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iijwn5iNKFVNQVIpKPCfmI0pIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYXFxWVFDRVArMDlMRUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvRjNPdlhhN2RMUWt0bTN1Z0ZkTDEyVTdGbkRwVHRNanFSVkpReWx3MUZFPSIsImFjY291bnRTaWduYXR1cmUiOiI0bWFMV1oxSnRjd2tYL3ZGQXVZMmhyeTJqZmRjcDVFV20xYXZCdGhxODhRTlc4NForR1ovZ2JrOUM2MWVMY0JoeDIzS29zaE5YTzcxL1dGYVhhY2JBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRjhOcFBaaHZFMENxUGJTa0lXWS9TM2tyMG8zK3VzVTlzd1hxZ3BPaVhFclcwdTd4WFl1SmJqc2RJTHlYajhEcHB5bHFIV2NxUW00MDF1aUp6UmxsakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNTg5MzA4NjQ6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnhkenIxMnUzUzBKTFp0N29CWFM5ZGxPeFp3NlU3VEk2a1ZTVU1wY05SUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTI4MDUyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBbW4ifQ==", //Enter Your Session Id Here
  //_________________________________________________________________________________________________________________________________
  SUDO: process.env.SUDO || "923158930864",
  //_________________________________________________________________________________________________________________________________
  SPAM_COUNT: process.env.SPAM_COUNT || "10",
  //_________________________________________________________________________________________________________________________________
  LANG: process.env.LANG || "EN",
  //_________________________________________________________________________________________________________________________________
  LOGS: toBool(process.env.LOGS) || true,
  //_________________________________________________________________________________________________________________________________
  MENTION_DATA: process.env.MENTION_DATA || "01:43 ━━━●───── 03:50;⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ⇆;919074692450;https://graph.org/file/63942461d4b8d78b360d3.jpg",
  //_________________________________________________________________________________________________________________________________
  MENTION_AUDIO: process.env.MENTION_AUDIO || "https://i.imgur.com/NCifJWe.mp4;https://graph.org/file/ecf0772cb95111796848c.mp4",
  //_________________________________________________________________________________________________________________________________
  MENTION: process.env.MENTION || 'false',
  //_________________________________________________________________________________________________________________________________
  HANDLERS: process.env.PREFIX || '.',
  //_________________________________________________________________________________________________________________________________
  RMBG_KEY: process.env.RMBG_KEY || false,
  //_________________________________________________________________________________________________________________________________
  STICKER_DATA: "🎯𝙿𝚑𝚘𝚎𝚗𝚒𝚡-𝙼𝙳;𝙰𝚋𝚑𝚒𝚜𝚑𝚎𝚔 𝚂𝚞𝚛𝚎𝚜𝚑☘️",
  //_________________________________________________________________________________________________________________________________
  WELCOME_MSG: process.env.WELCOME_MSG || "👋 Hello *@user* Welcome To Our Group *@gname*\n*Total Members:* @count\n*Group Description:*\n@gdesc {pp}",
  //_________________________________________________________________________________________________________________________________
  GOODBYE_MSG: process.env.GOODBYE_MSG || "👋 GoodBye *@user* From *@gname*\n*Total Members:* @count {pp}",
  //_________________________________________________________________________________________________________________________________
  DATABASE_URL: DATABASE_URL,
  //_________________________________________________________________________________________________________________________________
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  //_________________________________________________________________________________________________________________________________
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  //_________________________________________________________________________________________________________________________________
  OWNER_NAME: process.env.OWNER_NAME || "Abhishek Suresh",
  //_________________________________________________________________________________________________________________________________
  OWNER_NUMBER: process.env.OWNER_NUMBER || "918157993101",
  //_________________________________________________________________________________________________________________________________
  BOT_NAME: process.env.BOT_NAME || "Phoenix-MD",
  //_________________________________________________________________________________________________________________________________
  WORK_TYPE: process.env.MODE || "public",
  //_________________________________________________________________________________________________________________________________
  BASE_URL: "https://abhi-appi-9a0e16f0ca75.herokuapp.com/",
  //_________________________________________________________________________________________________________________________________
  //Database
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
