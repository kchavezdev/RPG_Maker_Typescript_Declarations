package mz.abstracts.windows;

import mz.windows.Window_Status;

@:forward
@:forwardStatics
abstract WindowStatus(Window_Status) from Window_Status to Window_Status {
 public inline function raw(): Window_Status {
  return this;
 }
}