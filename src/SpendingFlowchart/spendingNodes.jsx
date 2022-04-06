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
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 200 },
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
          id: 'source-left-a',
          type: 'source',
          position: 'left',
          style: { top: 35 },
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
          id: 'target-right-a',
          type: 'target',
          position: 'right',
          style: { top: 35 },
        },
        {
          id: 'target-right-b',
          type: 'target',
          position: 'right',
          style: { top: 85 },
        },
        {
          id: 'no',
          type: 'source',
          position: 'bottom',
          style: { left: 50 },
        },
        {
          id: 'yes',
          type: 'source',
          position: 'bottom',
          style: { left: 200 },
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
          position: 'left',
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
    },
    // type: 'customHandles',
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
    },
    // type: 'customHandles',
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
            Are you expecting any large, required purchase or personal
            investments in the near future?
          </strong>
          <br />
          (College, professional certifications, a car so you can get to work,
          etc.)
        </>
      ),
    },
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
    },
  },
].map((node) => createFlow(node));

export default [
  ...phase0Nodes,
  ...phase1Nodes,
  ...phase2Nodes,
  ...phase3Nodes,
  ...phase4Nodes,
];
