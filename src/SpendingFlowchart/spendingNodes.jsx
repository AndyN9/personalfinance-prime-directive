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
    },
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
    },
  },
].map((node) => createFlow(node));

export default [...phase0Nodes, ...phase1Nodes, ...phase2Nodes];
