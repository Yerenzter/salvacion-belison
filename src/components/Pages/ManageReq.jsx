import { Page, Text } from '../../lib';

export default function ManageRequests() {
  return(
    <Page id='manageRequests' title='Manage Requests' fullscreen={true}>
      <div className='font-sans text-2xl mt-2'>
      <Text label='This is manage request page.' />
      </div>
    </Page>
  );
}
