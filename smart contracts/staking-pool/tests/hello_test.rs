use gstd::ActorId;
use gtest::{Log, Program, System};
use stacking_io::*;
#[test]
fn simple_test(){
    let sys = System::new();
    sys.init_logger();
    let stakin_program = Program::current_with_id(&sys, 100);
    let result = stakin_program.send(20, InitStaking{
        distribution_time: 100,
        reward_total: 10,
        liquid_token_address: ActorId::from(1),
        reward_token_address: ActorId::from(2),
        staking_token_address: ActorId::from(3),
    });
    let expected_log = Log::builder().dest(20).payload(StakingEvent::Updated);
    let expected_msg = result.decoded_log::<String>();
    println!("{:#?}", expected_msg);
}