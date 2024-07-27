import { Page, Text } from '../../lib';

export default function ManageTransactions() {
  return(
    <Page id='manageTransactions' title='Manage Transactions' fullscreen={true}>
      <div className='font-sans text-2xl mt-2'>
        <Text label='This is manage transaction page.' />
      </div>
    </Page>
  );
}
