const createReport = (reportId,
  userId,
  reportedTo,
  reportedOn,
  location,
  isActedOn) => ({
  reportId,
  userId,
  reportedTo,
  reportedOn,
  location,
  isActedOn,
});

const reportData = [
  createReport(231, 43554, "KCCA", "KAMOKYA", "TUE 13 MAR 2020", true),
  createReport(5656, 4564642, "POLICE", "TUULA, KAWEMPE", "WED 5 MAY 2020", false),
  createReport(25353, 462546, "KCCA", "NABWERU, WAKISO", "THR 33 APR 2020", false),
  createReport(6575, 43554, "KCCA", "MENDE, WAKISO", "TUE 13 MAY 2020", true),
  createReport(230091, 43552134, "KCCA", "BUTABALA, MPINGI", "SUN 01 DEC 2020", false),
];

export default reportData;
