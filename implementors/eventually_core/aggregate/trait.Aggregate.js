(function() {var implementors = {};
implementors["eventually_core"] = [];
implementors["eventually_util"] = [{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a> for <a class=\"struct\" href=\"eventually_util/optional/struct.AsAggregate.html\" title=\"struct eventually_util::optional::AsAggregate\">AsAggregate</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"eventually_util/optional/trait.Aggregate.html\" title=\"trait eventually_util::optional::Aggregate\">Aggregate</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"eventually_util/optional/trait.Aggregate.html#associatedtype.Command\" title=\"type eventually_util::optional::Aggregate::Command\">Command</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"eventually_util/optional/trait.Aggregate.html#associatedtype.State\" title=\"type eventually_util::optional::Aggregate::State\">State</a>: <a class=\"trait\" href=\"eventually_core/aggregate/trait.Identifiable.html\" title=\"trait eventually_core::aggregate::Identifiable\">Identifiable</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"eventually_util/optional/trait.Aggregate.html#associatedtype.State\" title=\"type eventually_util::optional::Aggregate::State\">State</a> as <a class=\"trait\" href=\"eventually_core/aggregate/trait.Identifiable.html\" title=\"trait eventually_core::aggregate::Identifiable\">Identifiable</a>&gt;::<a class=\"type\" href=\"eventually_core/aggregate/trait.Identifiable.html#associatedtype.Id\" title=\"type eventually_core::aggregate::Identifiable::Id\">Id</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["eventually_util::optional::AsAggregate"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a> for <a class=\"struct\" href=\"eventually_util/versioned/struct.AsAggregate.html\" title=\"struct eventually_util::versioned::AsAggregate\">AsAggregate</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.State\" title=\"type eventually_core::aggregate::Aggregate::State\">State</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"eventually_core/aggregate/trait.Aggregate.html#associatedtype.Command\" title=\"type eventually_core::aggregate::Aggregate::Command\">Command</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":false,"types":["eventually_util::versioned::AsAggregate"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()