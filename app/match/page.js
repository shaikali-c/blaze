import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import FFAlok from "@/public/icons/hayato.png";
import Image from "next/image";
import { ArrowRight, SparklesIcon } from "lucide-react";

import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Match() {
  return (
    <section className="p-5 w-screen">
      <header>
        <h2 className="text-lg">Match Details</h2>
      </header>
      <MatchTable />
      <JoinInput />
      <Image src={FFAlok} alt="Character Image" />
    </section>
  );
}

function MatchTable() {
  return (
    <div className="mx-auto max-w-lg my-5">
      <div className="bg-background overflow-hidden rounded-md border">
        <Table>
          <TableBody>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Match ID
              </TableCell>
              <TableCell className="py-2">#645736</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Game
              </TableCell>
              <TableCell className="py-2">Free fire</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Prize
              </TableCell>
              <TableCell className="py-2">$2000.00</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Status
              </TableCell>
              <TableCell className="py-2">Active</TableCell>
            </TableRow>
            <TableRow className="*:border-border hover:bg-transparent [&>:not(:last-child)]:border-r">
              <TableCell className="bg-muted/50 py-2 font-medium">
                Members
              </TableCell>
              <TableCell className="py-2">25/64</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        View joined memebrs
      </p>
    </div>
  );
}

function JoinInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Enter your in-game UID</Label>
      <div className="flex gap-2">
        <Input id={id} placeholder="Eg., 526371612" type="number" />
        <JoinButton />
      </div>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Enter your in-game UID to confirm participation.
      </p>
    </div>
  );
}

function JoinButton() {
  return (
    <Button variant="outline" className={"ml-auto"}>
      Join
      <ArrowRight className="-me-1 opacity-60" size={16} aria-hidden="true" />
    </Button>
  );
}
