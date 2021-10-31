const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for, display all companies

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

let sumAges = 0;
for (let i = 0; i < ages.length; i++) {
  sumAges = sumAges + ages[i];
  console.log(sumAges);
}

// forEach, display all companies, or just names (callback, index, companies)

const companyNames = companies.forEach((company) => {
  console.log(company.name);
});

// filter,
// display all ages over 21 and over,

const legalAge = ages.filter((age) => age > 21);

console.log(legalAge);
// filter over retail companies

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailCompanies);

// filter companies from eighties

const eightyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

console.log(eightyCompanies);

// filter companies that are 10 and above 10 years old

const ageOverTenCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(ageOverTenCompanies);

// map
// array of company names

const companyNames2 = companies.map((company) => company.name);

console.log(companyNames2);

// array of company name and start and end date

const compNameStartEndDate = companies.map(
  (company) => `${company.name} ${company.start} ${company.end}`
);

console.log(compNameStartEndDate);

// array of square ages

const squareAges = ages.map((age) => age ** 2);

console.log(squareAges);

// array of ages * 2

const agesTimeTwo = ages.map((age) => age * 2);

console.log(agesTimeTwo);

// combine 2 maps, e.g. square + ages

const squareAndTimesTwo = ages.map((age) => age ** 2).map((age) => age * 2);

console.log(squareAndTimesTwo);

// sort
// sort companies in cronological order with ternary operator 1 and -1
// try sort

const smallToBig = ages.sort((a, b) => a - b);

console.log(smallToBig);

// reduce (total, age), startvalue)

// adds all numbers in age together

const sumAges2 = ages.reduce((total, age) => total + age, 0);

console.log(sumAges2);
// get total years for all companies

const totalAgeAllCompanies = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(totalAgeAllCompanies);

// combine
// combine map ages, filter (40 and over), sort in small to big, reduce to add all
