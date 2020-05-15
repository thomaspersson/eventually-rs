(function() {var implementors = {};
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_core/aggregate/struct.AggregateRoot.html\" title=\"struct eventually_core::aggregate::AggregateRoot\">AggregateRoot</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a>&gt;::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.Event\" title=\"type eventually_core::aggregate::Aggregate::Event\">Event</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a>&gt;::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.State\" title=\"type eventually_core::aggregate::Aggregate::State\">State</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["eventually_core::aggregate::AggregateRoot"]},{"text":"impl&lt;T, Store&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_core/repository/struct.Repository.html\" title=\"struct eventually_core::repository::Repository\">Repository</a>&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["eventually_core::repository::Repository"]},{"text":"impl&lt;A, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"eventually_core/repository/enum.Error.html\" title=\"enum eventually_core::repository::Error\">Error</a>&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a>&gt;::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.Error\" title=\"type eventually_core::aggregate::Aggregate::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"eventually_core/store/trait.EventStore.html\" title=\"trait eventually_core::store::EventStore\">EventStore</a>&gt;::<a class=\"type\" href=\"eventually_core/store/trait.EventStore.html#associatedtype.Error\" title=\"type eventually_core::store::EventStore::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["eventually_core::repository::Error"]}];
implementors["eventually_postgres"] = [{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_postgres/struct.EventStoreBuilder.html\" title=\"struct eventually_postgres::EventStoreBuilder\">EventStoreBuilder</a>","synthetic":true,"types":["eventually_postgres::EventStoreBuilder"]},{"text":"impl&lt;Id, Event&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_postgres/struct.EventStore.html\" title=\"struct eventually_postgres::EventStore\">EventStore</a>&lt;Id, Event&gt;","synthetic":true,"types":["eventually_postgres::EventStore"]}];
implementors["eventually_test"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_test/config/struct.Config.html\" title=\"struct eventually_test::config::Config\">Config</a>","synthetic":true,"types":["eventually_test::config::Config"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_test/log/struct.Middleware.html\" title=\"struct eventually_test::log::Middleware\">Middleware</a>","synthetic":true,"types":["eventually_test::log::Middleware"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_test/order/struct.OrderItem.html\" title=\"struct eventually_test::order::OrderItem\">OrderItem</a>","synthetic":true,"types":["eventually_test::order::OrderItem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_test/order/struct.OrderItems.html\" title=\"struct eventually_test::order::OrderItems\">OrderItems</a>","synthetic":true,"types":["eventually_test::order::OrderItems"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_test/order/struct.OrderAggregate.html\" title=\"struct eventually_test::order::OrderAggregate\">OrderAggregate</a>","synthetic":true,"types":["eventually_test::order::OrderAggregate"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderState.html\" title=\"enum eventually_test::order::OrderState\">OrderState</a>","synthetic":true,"types":["eventually_test::order::OrderState"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderCommand.html\" title=\"enum eventually_test::order::OrderCommand\">OrderCommand</a>","synthetic":true,"types":["eventually_test::order::OrderCommand"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderEvent.html\" title=\"enum eventually_test::order::OrderEvent\">OrderEvent</a>","synthetic":true,"types":["eventually_test::order::OrderEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"eventually_test/order/enum.OrderError.html\" title=\"enum eventually_test::order::OrderError\">OrderError</a>","synthetic":true,"types":["eventually_test::order::OrderError"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_test/state/struct.AppState.html\" title=\"struct eventually_test::state::AppState\">AppState</a>","synthetic":true,"types":["eventually_test::state::AppState"]}];
implementors["eventually_util"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_util/inmemory/struct.EventStoreBuilder.html\" title=\"struct eventually_util::inmemory::EventStoreBuilder\">EventStoreBuilder</a>","synthetic":true,"types":["eventually_util::inmemory::EventStoreBuilder"]},{"text":"impl&lt;Id, Event&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_util/inmemory/struct.EventStore.html\" title=\"struct eventually_util::inmemory::EventStore\">EventStore</a>&lt;Id, Event&gt;","synthetic":true,"types":["eventually_util::inmemory::EventStore"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_util/optional/struct.AsAggregate.html\" title=\"struct eventually_util::optional::AsAggregate\">AsAggregate</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::optional::AsAggregate"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_util/versioned/struct.AsAggregate.html\" title=\"struct eventually_util::versioned::AsAggregate\">AsAggregate</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::versioned::AsAggregate"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"eventually_util/versioned/struct.Versioned.html\" title=\"struct eventually_util::versioned::Versioned\">Versioned</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["eventually_util::versioned::Versioned"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()