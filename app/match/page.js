import { CheckIcon } from "lucide-react";

import { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const items = [
  {
    id: 1,
    date: "Mar 15, 2024",
    title: "Tournament Kickoff",
    description:
      "The tournament setup officially begins. Organizers can now define the format, rules, and schedule.",
  },
  {
    id: 2,
    date: "Mar 22, 2024",
    title: "Design Phase",
    description:
      "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
  },
  {
    id: 3,
    date: "Apr 5, 2024",
    title: "Development Sprint",
    description:
      "Backend API implementation and frontend component development in progress.",
  },
  {
    id: 4,
    date: "Apr 19, 2024",
    title: "Testing & Deployment",
    description:
      "Quality assurance testing, performance optimization, and production deployment preparation.",
  },
];

export default function Match() {
  const id = useId();

  return (
    <section className="h-screen bg-neutral-950 md:border-x-2 md:border-neutral-800 md:max-w-300">
      <header className="p-5">
        <h2>Match Details</h2>
      </header>
      <Timeline defaultValue={1} className={"p-10 pt-2"}>
        {items.map((item) => (
          <TimelineItem
            key={item.id}
            step={item.id}
            className="group-data-[orientation=vertical]/timeline:ms-10"
          >
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineIndicator className="group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center group-data-completed/timeline-item:border-none group-data-[orientation=vertical]/timeline:-left-7">
                <CheckIcon
                  className="group-not-data-completed/timeline-item:hidden"
                  size={16}
                />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent>{item.description}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <div className="mx-auto max-w-85 md:max-w-lg">
        <div className="bg-background overflow-hidden rounded-md border">
          <Table>
            <TableBody>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">
                  Title
                </TableCell>
                <TableCell className="py-2">Clash Domination</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">
                  Game
                </TableCell>
                <TableCell className="py-2">Free fire</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">
                  Match ID
                </TableCell>
                <TableCell className="py-2">#ac63de</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">
                  Entry Fee
                </TableCell>
                <TableCell className="py-2">Free</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">
                  Status
                </TableCell>
                <TableCell className="py-2">Active</TableCell>
              </TableRow>
              <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
                <TableCell className="bg-muted/50 py-2 font-medium">
                  Prize
                </TableCell>
                <TableCell className="py-2">$1,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="px-8 md:px-20 mt-5 pb-10">
        <div className="*:not-first:mt-2">
          <Label htmlFor={id}>Join the Tournament</Label>
          <div className="flex rounded-md shadow-xs">
            <Input
              id={id}
              className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
              placeholder="Game UID"
              type="number"
            />
            <button className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50">
              Join
            </button>
          </div>
        </div>
        <p className="text-neutral-400 text-sm p-3 pl-0 pr-0">
          Please enter your in-game UID exactly as it appears. Inaccurate
          entries may lead to disqualification from the tournament.
        </p>
      </div>
    </section>
  );
}
