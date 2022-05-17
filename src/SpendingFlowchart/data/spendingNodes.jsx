import React from 'react';

function createFlow(node) {
  const phase = node.id.split('-step-')[0];
  const defaultNodeProperties = {
    type: 'default',
    // set nodes' initial position in order for onInit / createGraphLayout to work
    position: { x: 0, y: 0 },
    className: `step ${phase}`,
  };

  return {
    ...defaultNodeProperties,
    ...node,
  };
}

const phaseNodes = [
  {
    id: 'title',
    data: {
      label: (
        <>
          <strong>Personal Income Spending Flowchart - United States</strong>
          <br />
          Based off the flowchart created by /u/atlasvoid for the
          /r/personalfinance subreddit.
        </>
      ),
    },
    type: 'customHandles',
    skip: true,
  },
  {
    id: 'legend',
    type: 'group',
    skip: true,
  },
  {
    id: 'phase-0',
    data: {
      label: (
        <>
          <strong>Step 0:</strong>
          <br />
          Budget & reduce expenses, set realistic goals
        </>
      ),
    },
    type: 'customHandles',
    parentNode: 'legend',
  },
  {
    id: 'phase-1',
    data: {
      label: (
        <>
          <strong>Step 1:</strong>
          <br />
          Build an emergency fund
        </>
      ),
    },
    type: 'customHandles',
    parentNode: 'legend',
  },
  {
    id: 'phase-2',
    data: {
      label: (
        <>
          <strong>Step 2:</strong>
          <br />
          Employer-sponsored matching funds
        </>
      ),
    },
    type: 'customHandles',
    parentNode: 'legend',
  },
  {
    id: 'phase-3',
    data: {
      label: (
        <>
          <strong>Step 3:</strong>
          <br />
          Pay down high/moderate interest debts
        </>
      ),
    },
    type: 'customHandles',
    parentNode: 'legend',
  },
  {
    id: 'phase-4',
    data: {
      label: (
        <>
          <strong>Step 4:</strong>
          <br />
          Savings for retirement in an IRA & higher education expenses
        </>
      ),
    },
    type: 'customHandles',
    parentNode: 'legend',
  },
  {
    id: 'phase-5',
    data: {
      label: (
        <>
          <strong>Step 5:</strong>
          <br />
          Save more for retirement
        </>
      ),
    },
    type: 'customHandles',
    parentNode: 'legend',
  },
  {
    id: 'phase-6',
    data: {
      label: (
        <>
          <strong>Step 6:</strong>
          <br />
          Save for other goals & advanced methods
        </>
      ),
    },
    type: 'customHandles',
  },
].map((node) => createFlow(node));

const phase0Nodes = [
  {
    id: 'phase-0-step-0',
    data: {
      label: (
        <>
          <strong>Create Budget</strong>
          <br />
          (Fundamental to a sound financial footing is knowing where your money
          is going, budgeting helps you see your sources of income less your
          expenses.)
        </>
      ),
    },
    type: 'input',
  },
  {
    id: 'phase-0-step-1',
    data: {
      label: (
        <>
          <strong>Pay Rent/Mortgage</strong>
          <br />
          (Including renters or homeowners insurance, if required)
        </>
      ),
    },
  },
  {
    id: 'phase-0-step-2',
    data: {
      label: (
        <>
          <strong>Buy Food/Groceries</strong>
          <br />
          (Depending on the severity of your situation and needs, you may wish
          to prioritize utilities before this node.)
        </>
      ),
    },
  },
  {
    id: 'phase-0-step-3',
    data: {
      label: (
        <>
          <strong>Pay Essential Items</strong>
          <br />
          (Power, water, heat, toiletries, etc.)
        </>
      ),
    },
  },
  {
    id: 'phase-0-step-4',
    data: {
      label: (
        <>
          <strong>Pay Income Earning Expenses</strong>
          <br />
          (Necessary transportation expenses, possibly internet/phone, anything
          required to continue earning income)
        </>
      ),
    },
  },
  {
    id: 'phase-0-step-5',
    data: {
      label: (
        <>
          <strong>Pay Health Care</strong>
          <br />
          (Health insurance and health care expenses)
        </>
      ),
    },
  },
  {
    id: 'phase-0-step-6',
    data: {
      label: (
        <>
          <strong>Make Minimum Payments On All Debts & Loan</strong>
          <br />
          (Student loans, credit cards, etc.)
        </>
      ),
    },
  },
].map((node) => createFlow(node));

const phase1Nodes = [
  {
    id: 'phase-1-step-0',
    data: {
      label: (
        <>
          <strong>Build Small Emergency Fund</strong>
          <br />
          (Either $1000 or one month's worth of expenses, whichever is greater;
          use a savings account or checking account.)
        </>
      ),
    },
  },
  {
    id: 'phase-1-step-1',
    data: {
      label: (
        <>
          <strong>Pay Any Non-Essential Bills in Full</strong>
          <br />
          (Cable, internet, phone, etc.)
        </>
      ),
    },
  },
  {
    id: 'phase-1-step-2',
    data: {
      label: (
        <>
          <strong>Increase Emergency Fund to 3-6 Months Living Expenses</strong>
          <br />
          (Use a savings or checking account.)
        </>
      ),
    },
  },
].map((node) => createFlow(node));

const phase2Nodes = [
  {
    id: 'phase-2-step-0',
    data: {
      label: (
        <strong>
          Does your employer offer a retirement account with an employer match?
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-2-step-1',
    data: {
      label: (
        <strong>
          Contribute the amount needed to get the full employer match, but
          nothing above that amount.
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'source-right-a',
          type: 'source',
          position: 'right',
          style: { top: 25 },
        },
      ],
    },
    type: 'customHandles',
  },
].map((node) => createFlow(node));

const phase3Nodes = [
  {
    id: 'phase-3-step-0',
    data: {
      label: (
        <>
          <strong>Do you have any high interest debt?</strong>
          <br />
          (i.e. debt with an interest rate of 10$ or higher)
        </>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'target-left-a',
          type: 'target',
          position: 'left',
          style: { top: 25 },
        },
        {
          id: 'target-left-b',
          type: 'target',
          position: 'left',
          style: { top: 125 },
        },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-3-step-1',
    data: {
      label: (
        <strong>
          Evaluate the merits of the 'Avalanche' and 'Snowball' methods and
          their advantages in your personal financial/psychological situation
          and apply accordingly to pay off these debts.
        </strong>
      ),
      handles: [
        {
          type: 'target',
          position: 'top',
        },
        {
          type: 'source',
          position: 'right',
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-3-step-2',
    data: {
      label: (
        <>
          <strong>Do you have any moderate interest debt?</strong>
          <br />
          (i.e., remaining debt over 4-5% interest rate, excluding mortgage)
        </>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'target-left',
          type: 'target',
          position: 'left',
        },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-3-step-3',
    data: {
      label: (
        <strong>
          Evaluate the merits of the 'Avalanche' and 'Snowball' methods and
          their advantages in your personal financial/psychological situation
          and apply accordingly to pay off these debts.
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          type: 'source',
          position: 'right',
        },
      ],
    },
    type: 'customHandles',
  },
].map((node) => createFlow(node));

const phase4Nodes = [
  {
    id: 'phase-4-step-0',
    data: {
      label: (
        <strong>
          Evaluate the merits of a Roth vs. Traditional IRA in the context of
          your personal financial situation and max the yearly contribution
          accordingly.
        </strong>
      ),
    },
  },
  {
    id: 'phase-4-step-1',
    data: {
      label: (
        <>
          <strong>
            Are you expecting any large, <em>required</em> purchase or personal
            investments in the near future?
          </strong>
          <br />
          (College, professional certifications, a car so you can get to work,
          etc.)
        </>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-4-step-2',
    data: {
      label: (
        <strong>
          Save the amount needed for these expenses in a savings or checking
          account.
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          type: 'source',
          position: 'right',
          style: { top: 25 },
        },
      ],
    },
    type: 'customHandles',
  },
].map((node) => createFlow(node));

const phase5Nodes = [
  {
    id: 'phase-5-step-0',
    data: {
      label: (
        <>
          <strong>
            Are you currently saving <em>at least</em> 15% of your pre-tax
            income for retirement?
          </strong>
          <br />
          (Total contributions to all retirement accounts; note that you may
          need to save more if you are behind on retirement savings.)
        </>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'target-left-a',
          type: 'target',
          position: 'left',
          style: { top: 25 },
        },
        {
          id: 'target-left-b',
          type: 'target',
          position: 'left',
          style: { top: 125 },
        },
        {
          id: 'target-right',
          type: 'target',
          position: 'right',
        },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-5-step-1',
    data: {
      label: (
        <strong>
          Does your employer offer a 401(k), 403(b), or similar retirement plan
          into which you could save more money?
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-5-step-2',
    data: {
      label: (
        <strong>
          Increase contributions until you have reached 15% pre-tax income being
          saved for retirement.
        </strong>
      ),
      handles: [
        {
          type: 'target',
          style: { left: 50 },
        },
        {
          type: 'source',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-5-step-3',
    data: {
      label: (
        <strong>
          If self-employed, contribute to an Individual 401(k), SEP-IRA, or
          SIMPLE IRA to reach 15% pre-tax income saved; if not self-employed,
          contribute to a taxable account to reach this goal.
        </strong>
      ),
      handles: [
        {
          type: 'target',
          position: 'top',
          style: { left: 50 },
        },
        {
          type: 'source',
          position: 'top',
          style: { left: 275 },
        },
      ],
    },
    type: 'customHandles',
  },
].map((node) => createFlow(node));

const phase6Nodes = [
  {
    id: 'phase-6-step-0',
    data: {
      label: (
        <strong>
          Do you have a qualified high-deductible health plan and are thus
          eligible for an investable HSA?
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-6-step-1',
    data: {
      label: <strong>Max yearly HSA contributions</strong>,
      handles: [
        { type: 'target' },
        {
          type: 'source',
          position: 'right',
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-6-step-2',
    data: {
      label: (
        <strong>
          Do you have children and wish to help pay for some or all of their
          college expenses?
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'target-left',
          type: 'target',
          position: 'left',
        },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 250 },
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-6-step-3',
    data: {
      label: (
        <strong>
          Evaluate available savings/investment options, such as 529 plan, and
          contribute accordingly.
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          type: 'source',
          position: 'right',
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-6-step-4',
    data: {
      label: (
        <strong>
          At this point, you have some options on how to proceed, and it is
          completely up to you and your personal goals and desires.
        </strong>
      ),
      handles: [
        { type: 'target' },
        {
          id: 'target-left',
          type: 'target',
          position: 'left',
        },
        {
          id: 'source-bottom',
          type: 'source',
          position: 'bottom',
        },
      ],
    },
    type: 'customHandles',
  },
  {
    id: 'phase-6-step-5',
    data: {
      label: <strong>Would you like to retire early?</strong>,
    },
  },
  {
    id: 'phase-6-step-6',
    data: {
      label: (
        <strong>
          Max out 401(k), 403(b), or other employer sponsored account, consider
          the 'mega backdoor Roth IRA', then use a taxable account.
        </strong>
      ),
    },
    type: 'output',
  },
  {
    id: 'phase-6-step-7',
    data: {
      label: <strong>Do you have more immediate goals?</strong>,
    },
  },
  {
    id: 'phase-6-step-8',
    data: {
      label: (
        <>
          <strong>
            Use savings for goals sooner than 3-5 years, a conservative mix of
            stocks and bonds for goals more than 3-5 years away.
          </strong>
          <br />
          (Common examples include down payments for homes, savings for
          vehicles, paying down a mortgage, and vacation funds.)
        </>
      ),
    },
    type: 'output',
  },
].map((node) => createFlow(node));

export default [
  ...phaseNodes,
  ...phase0Nodes,
  ...phase1Nodes,
  ...phase2Nodes,
  ...phase3Nodes,
  ...phase4Nodes,
  ...phase5Nodes,
  ...phase6Nodes,
];
