import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import Card from 'react-bootstrap/Card'
import { CardBody } from "reactstrap"
const aboutPage = () => (
  <Layout>
    <SEO title="About" />
<Helmet>
<script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script>
</Helmet>
<div className="container-scroll" style={{maxHeight: 700, overflow: 'auto'}}>
<Card className="container-widget">
<CardBody  style={{padding:10}}>
<div class="coinmarketcap-currency-widget" data-currencyid="1776" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
<CardBody style={{padding:10}}>
<div class="coinmarketcap-currency-widget" data-currencyid="3635" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
<CardBody style={{padding:10}}>
<div  class="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
<CardBody style={{padding:10}}>
<div class="coinmarketcap-currency-widget" data-currencyid="1027" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
<CardBody style={{padding:10}}>
<div class="coinmarketcap-currency-widget" data-currencyid="52" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
<CardBody style={{padding:10}}>
<div class="coinmarketcap-currency-widget" data-currencyid="1831" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
<CardBody style={{padding:10}}>
<div class="coinmarketcap-currency-widget" data-currencyid="3602" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
<CardBody style={{padding:10}}>
<div class="coinmarketcap-currency-widget" data-currencyid="825" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
<CardBody style={{padding:10}}>
<div class="coinmarketcap-currency-widget" data-currencyid="2" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
</CardBody>
</Card>
</div>
  </Layout>
)

export default aboutPage