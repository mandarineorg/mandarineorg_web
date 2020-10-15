As of the time I am writing this blog, Mandarine is going through its version **2.1.3** with 102 stars in Github. This has been a huge achievement, and I thank everyone who has used Mandarine in one way or the other.

Today, I would like to talk about the future of Mandarine & its stability for large & demanding projects in the community. Our goals **have not changed**, we strongly believe Mandarine can be a solution for enterprise problems but at the same time, the kind of framework you can use in small projects without too much complexity.

## Stability
It is more than clear that any framework which builds web APIs need an stable ecosystem for database drivers. Databases do play a huge role in deciding whether to use one framework or the other. On this issue, Mandarine has a fairly big & external disadvantage, this is because [Deno](https://deno.land) is not as prepared & mature in terms of database operations as [NodeJS](https://nodejs.org/en/) is & this is totally understandable, Deno has been out there for only two years, it does not mean it's not more stable than NodeJS nor does it mean it is not usable, it just means the __NodeJS comunity__ is fairly bigger thus packages used in NodeJS tend to be more maintained & used providing stability for those who use it.  

**The solution**  
Facing the kind of questions we mentioned before such as Database drivers & its relation and stability with the product is not only important but necessary for the long-term goal of Mandarine, but it is more important to come up with feasible solutions. Mandarine's core team has thought carefully on how to address this issue without having to depend on Deno's ecosystem, this is what we would like to implement:  
- Deno provides an API to call [Rust](https://www.rust-lang.org/) code from the Javascript side, this is what we call "plugins". Based on this, we want:
    - Create a database driver in Rust for PostgreSQL. This would be initialized under the hood by Mandarine & it would be available for Mandarine's ORM.
    - In the same way of having a Rust plugin for PostgreSQL, we would ideally want a plugin for MySQL.
    - Any other database implementation would also be written in Rust, this would be subject to change back to Typescript until Deno reaches a level of maturity where we do not need any Rust bridge anymore.

Aditionally, if Deno is not capable of providing a required feature for stability, we would use Rust again to cover these needs while waiting on Deno to gain more maturity & implement our different feature requests. 

## A multi-application oriented Mandarine
Our most recent tests have demonstrated Mandarine can be used for CLI applications & not only for web APIs as we first planned. A big part of Mandarine's stability is now depending on expanding the framework to new horizons.   
Deno has provided a very stable & great system that covers our needs which leads us to start planning the following long-term goals:
- Mandarine should not only be a web MVC framework but it should also cover CLI applications & in the future, it should definately cover desktop applications.
- Mandarine should expose its internal APIs in order for people to use the framework without depending on Mandarine's arquitecture rather than people being able to use Mandarine's core in any desired way.  

While there is a lot to be planned & investigated, Mandarine has made a huge amount of progress in terms of stability and we are looking forward to keeping these same practices. These changes do not happen overnight & they require as many professional perspectives as possible, for that, we would like you to contribute with your opinion, feature requests, bug finding, or just _general feedback_. Reach out to our team by:  
- [Mandarine discord](https://discord.gg/qs72byB) 
- [Mandarine Github issues](https://github.com/mandarineorg/mandarinets/issues)