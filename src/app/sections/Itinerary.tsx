import EventCard from "@/app/components/itineraryComponents/EventCard";
import DayCard from "@/app/components/itineraryComponents/DayCard";

export default function Itinerary() {
  return (
    <div>
      <h1 className="text-[3rem] text-center font-[Maragsa] text-black py-[5vh]">
        Itinerary
      </h1>

      {/* First Day */}
      <div className="flex flex-col justify-center gap-10">
        <DayCard date="Friday, October 3rd">
          <EventCard
            time="6 PM EST/ 3 PM PST"
            eventName="How to construct a Product Requirements Document"
          />
          <EventCard
            time="7 PM EST / 4 PM PST"
            eventName="Midwest / East Coast Business Session"
            description="A chance to talk to the businesses!"
          />
          <EventCard
            time="8 PM EST / 5 PM PST"
            eventName="West Coast Business Session"
            description="A chance to talk to the businesses!"
          />
          <EventCard time="9 PM EST / 6 PM PST" eventName="Hacking Starts" />
        </DayCard>

        {/* Second Day */}
        <DayCard date="Saturday, October 4th">
          <EventCard
            time="11 AM EST / 8 AM PST"
            eventName="Midwest / East Coast Business Session"
            description="Connect with businesses"
          />
          <EventCard
            time="1 PM EST / 11 AM PST"
            eventName="West Coast Business Session"
            description="Connect with businesses"
          />
          <EventCard
            time="3 PM EST / 12 PM PST"
            eventName="Devpost Draft Submissions Due"
          />
          <EventCard
            time="4-5 PM EST / 1-2 PM PST"
            eventName="Technical Interview Prep"
            description="Workshop hosted by Luzanne Batoon (Google)"
          />
          <EventCard
            time="5-6 PM EST / 2-3 PM PST"
            eventName="Pitching your Hackathon Project and Demo"
            description="Aliza Carpio (JLL Technologies, prev Autodesk, Intuit)"
          />
          <EventCard
            time="6-7 PM EST / 3-4 PM PST"
            eventName="How our Filipino Culture shapes our workplace attitudes (and overcoming its limitations)
"
            description="Kylie Taitano (Intuit)"
          />
          <EventCard
            time="7-8 PM EST / 4-5 PM PST"
            eventName="Workshop"
            description="Details TBD"
          />
          <EventCard
            time="8-9 PM EST / 5-6 PM PST"
            eventName="Speaker Panel Event"
            description="Details TBD"
          />
        </DayCard>

        {/* Third Day */}
        <DayCard date="Sunday, October 5th">
          <EventCard
            time="1 PM EST / 11 AM PST"
            eventName="How to Sell Your Idea / Solution Workshop"
          />
          <EventCard time="3 PM EST / 12 PM PST" eventName="Hacking Ends" />
          <EventCard
            time="3:30 PM EST / 12:30 PM PST"
            eventName="Devpost Final Submission is Due"
          />
        </DayCard>

        {/* Last Day */}
        <DayCard date="Monday, October 6th">
          <EventCard time="END OF DAY" eventName="Winners Anounced" />
        </DayCard>
      </div>
    </div>
  );
}
