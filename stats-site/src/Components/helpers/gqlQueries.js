import gql from "graphql-tag";

const queries = {
  cpiKey : gql`
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

  }`
};

export default queries;