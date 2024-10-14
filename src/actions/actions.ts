interface Action {
    type: string;
    execute: (...args: any[]) => void;
  }
  
  const actions: { [key: string]: Action } = {
    'SendSMS': {
      type: 'SendSMS',
      execute: (phoneNumber: string) => {
        console.log(`Sending SMS to: ${phoneNumber}`);
      }
    },
    'SendEmail': {
      type: 'SendEmail',
      execute: (sender: string, receiver: string) => {
        console.log(`Sending email from: ${sender} to: ${receiver}`);
      }
    },
    "DoNothing":{
      type: 'DoNothing',
      execute: () => {
        console.log("Do nothing executed");
      }
    }
  };
  
  export default actions;