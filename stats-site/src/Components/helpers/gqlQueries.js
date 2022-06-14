import gql from "graphql-tag";

const queries = {
  keyStats : gql`
  query cpi($year: String!){
    cpi(query:{Year: $year}){
      April
      August
      Average
      December
      February
      January
      July
      June
      March
      May
      November
      October
      September
      Year
      _id
    }
    cpiPercents(query:{Year:$year}) {
      April
      August
      Average
      December
      February
      January
      July
      June
      March
      May
      November
      October
      September
      Year
      _id
    }
    rsiPercents(query:{Year:$year, Apparel_exists:true}) {
      Total
      Month
      Year
      _id
    }
      rsis(query:{Year:$year, Apparel_exists:true}) {
        Total
        Month
        Year
        _id
      }

  }`,
  cpiYears: gql`
  query cpiYears($start: String!, $end: String!){
    cpis(query:{Year_gte: $start, Year_lte: $end}){
      Average
      Year
      _id
    }
  }`,
  coicopCats: gql`
  query coicopCats{
    coicops(query:{UN_exists:true}, limit:500) {
      BDA
      Codes
      Description
      UN
      _id
      index
    }
  }`
 
};

export default queries;