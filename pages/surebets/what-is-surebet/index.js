import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import { Typography } from "@mui/material";
import PageSeo from "../../../components/PageSeo";

const WhatIsSurebet = () => {
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | What is Surebets && Arbitrage",
    description:
      "Get a deep understanding of what is a surebet & arbitrage in sports betting.",
    pageUrl: pageUrl,
  };

  return (
    <div className={styles.main}>
      <PageSeo seoProps={pageSeoProps} />

      <div className={styles.articleWhatIsSurebet}>
        <Typography variant="h2">What is a surebet & arbitrage</Typography>
        <Typography>
          Before starting to work with surebets, it is important to learn a
          little more about them. This article provides detailed information
          about arbitrage betting and gives valuable tips for beginners.
        </Typography>
      </div>

      <div className={styles.articleWhatIsSurebet}>
        <Typography variant="h4">
          What is a surebet (arb) and how does it come about?
        </Typography>
        <Typography>
          A surebet (arb) is a mathematically calculated arbitrage situation
          that allows betting on opposite outcomes for the same event at
          different bookmakers. The bettor wins whatever the outcome!
        </Typography>
        <Typography>
          There are different reasons that lead to the emergence of an
          arbitration situation, namely:
        </Typography>
        <Typography>
          1 - Overvalued odds due to competition between bookmakers.
        </Typography>
        <Typography>
          2 - Bookmakers cannot keep track of each other's actions and offer
          different odds.
        </Typography>
        <Typography>3 - Bookmaker errors leading to incorrect odds.</Typography>
        <Typography>
          If you want to know more about arbs and how they work, read the other
          in-depth article on surebets.
        </Typography>
      </div>

      <div className={styles.articleWhatIsSurebet}>
        <Typography variant="h4">Surebet example</Typography>
        <Typography>
          For example, one bookmaker offers @ 2.17 for AH1(-1.5) in Arsenal Tula
          - FC Tambov clash, and the second – @ 2.31 for AH2(+1.5).
        </Typography>
        <Typography>
          Our bankroll for this surebet is €100, €52 of which we bet on AH1
          (-1.5) and €48 on AH2(+1.5). Then, let’s calculate:
        </Typography>
        <Typography>
          AH1(-1.5) – €52 * 2.17 = €112.84 = €12.84 net income.
        </Typography>
        <Typography>
          AH2(+1.5) – €48 * 2.31 = €110.88 = €10.88 net income.
        </Typography>
        <Typography>
          Thus, regardless of the result of the match, our profit will be either
          €10.88 or €12.84. All this is thanks to the surebet, on which we have
          bet.
        </Typography>
      </div>

      <div className={styles.articleWhatIsSurebet}>
        <Typography variant="h4">Types of Surebets</Typography>
        <Typography>
          Prematch surebet – is an arbitrage situation, which arises due to the
          odds difference before the event.
        </Typography>
        <Typography>
          Live surebet – is an arbitrage situation, which springs up due to the
          odds difference in Live Betting (stakes during the game on).
        </Typography>
        <Typography>
          Of course, each of these surebet types has its own pros and cons,
          which we would like to tell you about in more detail today.
        </Typography>
      </div>

      <div className={styles.articleWhatIsSurebet}>
        <Typography variant="h4">
          The Main Differences between Prematch and Live Surebets
        </Typography>
        <Typography>
          Prematch surebets are placed before the event (match, race etc.). On
          Live it’s a bit different; you have to bet during the ongoing
          competition.
        </Typography>
        <Typography>
          In Prematch odds are changing much more slower than Live ones.
          Therefore, newbies are advised to start from Prematch surebets as it’s
          easier to make it on the required stake.
        </Typography>
        <Typography>
          On Live one may find more profitable arbs than on Prematch. This is
          due to the fact that bookmakers don’t have time to keep track of all
          the odds in Live mode. As a result, there are a lot of overstated
          odds, and one may calculate a large number of profitable Live arbs.
        </Typography>
        <Typography>
          On Live it is pretty hard to identify you as an arber, as bookmakers
          have no time to analyze your stakes. Accordingly, the risk of your
          account to get limited is much lower.
        </Typography>
        <Typography>
          Bankroll return and profit growth on Live comes much more rapidly than
          on Prematch. All you have to do is to wait till the match ends and get
          your money. On Prematch you will have to wait until the match starts
          and get your earnings only after a couple of days.
        </Typography>
        <Typography>
          If you want to learn more about surebets and how to work with it,
          click the Next button to go to the second article from our educational
          cycle.
        </Typography>
      </div>
    </div>
  );
};

export default WhatIsSurebet;
